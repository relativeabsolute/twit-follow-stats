import { IUserObject } from './user-object';

export interface IAdvancedStatsInternalResponse {
    followers: IUserObject[];
    following: IUserObject[];
}

export interface IBooleanCount {
    are: number;
    areNot: number;
}

export interface IAdvancedGroupStats {
    averageFollowersCount: number;
    averageFollowingCount: number;
    protectedCount: IBooleanCount;
    verifiedCount: IBooleanCount;
}

export interface IAdvancedStatsResponse {
    followerStats: IAdvancedGroupStats;
    followingStats: IAdvancedGroupStats;
}
