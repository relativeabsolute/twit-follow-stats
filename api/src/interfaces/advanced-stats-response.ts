import { IUserObject } from './user-object';

export interface IAdvancedStatsInternalResponse {
    followers: IUserObject[];
    following: IUserObject[];
}

export interface IAdvancedStatsResponse {}
