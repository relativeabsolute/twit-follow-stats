import { Observable, from, of } from 'rxjs';
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

    // TODO: handle cursors
    getUserFollowers(userId: number): Observable<any> {
        if (!userId) {
            return of(null);
        }

        const encodedQuery = querystring.stringify({
            skip_status: 1,
            userId,
        });
        console.log(JSON.stringify(this.headers, null, '\t'));
        return from(this.twitterApiV1(`/followers/list.json?${encodedQuery}`, null, this.headers));
    }

    // TODO: handle cursors
    getUserFollowing(userId: number): Observable<any> {
        if (!userId) {
            return of(null);
        }

        const encodedQuery = querystring.stringify({
            skip_status: 1,
            userId,
        });

        return from(this.twitterApiV1(`/friends/list.json?${encodedQuery}`, null, this.headers));
    }
}
