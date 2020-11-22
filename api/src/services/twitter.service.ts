import { IStatsInternalResponse } from './../interfaces/stats-response';
import { Observable, from, of, throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import bent from 'bent';
import querystring from 'querystring';

export class TwitterService {
    private readonly baseUrl = 'https://api.twitter.com';
    private readonly twitterApiV2: bent.RequestFunction<bent.ValidResponse>;
    private readonly twitterApiV1: bent.RequestFunction<bent.ValidResponse>;
    private readonly twitterBearerToken: string;
    private readonly headers: any;

    constructor() {
        this.twitterApiV2 = bent(`${this.baseUrl}/2`, 'GET', 'json', 200);
        this.twitterApiV1 = bent(`${this.baseUrl}/1.1`, 'GET', 'json', 200);
        this.twitterBearerToken = process.env.TWITTER_BEARER;
        this.headers = {
            Authorization: `Bearer ${this.twitterBearerToken}`,
        };
    }

    // TODO: stronger typing on apis
    searchUsers(query: string): Observable<any> {
        if (!query) {
            return of(null);
        }

        const encodedQuery = querystring.stringify({
            usernames: query,
            'user.fields': 'name,profile_image_url,username,id',
        });
        return from(this.twitterApiV2(`/users/by?${encodedQuery}`, null, this.headers));
    }

    getUserStats(userId: string): Observable<IStatsInternalResponse> {
        if (!userId) {
            return of(null);
        }

        const encodedQuery = querystring.stringify({
            skip_status: 1,
            user_id: userId,
            stringify_ids: true,
        });

        const baseEndpoint = `ids.json?${encodedQuery}`;
        const followersEndpoint = `/followers/${baseEndpoint}`;
        const followingEndpoint = `/friends/${baseEndpoint}`;
        return forkJoin([
            from(this.twitterApiV1(followersEndpoint, null, this.headers)).pipe(
                catchError(this.handleError('getUserFollowers', `1.1${followersEndpoint}`)),
            ),
            from(this.twitterApiV1(followingEndpoint, null, this.headers)).pipe(
                catchError(this.handleError('getUserFollowing', `1.1${followingEndpoint}`)),
            ),
        ]).pipe(map(([followers, following]) => ({ followers, following })));
    }

    private handleError(operation: string, twitterEndpoint: string): (err: any) => Observable<never> {
        return (err: any) => {
            // TODO: more specific errors

            const errorMessage = [`Error in ${operation}() calling Twitter API ${twitterEndpoint}`, `Detailed error: ${err}`];
            return throwError(errorMessage);
        };
    }
}
