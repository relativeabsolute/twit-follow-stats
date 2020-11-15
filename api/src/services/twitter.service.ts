import bent from 'bent';
import querystring from 'querystring';

export class TwitterService {
    private readonly baseUrl = 'https://api.twitter.com/2';
    private readonly twitterApi: bent.RequestFunction<bent.ValidResponse>;
    private readonly twitterBearerToken: string;

    constructor() {
        this.twitterApi = bent(this.baseUrl, 'GET', 'json', 200);
        this.twitterBearerToken = process.env.TWITTER_BEARER;
    }

    searchUsers(query: string): Promise<any> {
        if (!query) {
            return null;
        }
        const headers = {
            Authorization: `Bearer ${this.twitterBearerToken}`,
        };

        const encodedQuery = querystring.stringify(
            {
                usernames: query,
                'user.fields': 'name,profile_image_url,username,id',
            },
            null,
            null,
        );
        return this.twitterApi(`/users/by?${encodedQuery}`, null, headers);
    }
}
