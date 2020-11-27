export interface IUserQuery {
    skip_status: 0 | 1;
    user_id: string;
}

export interface IUserIdsQuery extends IUserQuery {
    stringify_ids: boolean;
}
