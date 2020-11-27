export interface IUserObject {
    name: string;
    location?: string;
    url?: string;
    description?: string;
    protected: boolean;
    verified: boolean;
    followers_count: number;
    friends_count: number;
    created_at: string;
}
