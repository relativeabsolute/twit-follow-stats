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

export interface IAdvancedStatsObject {
    followerStats: IAdvancedGroupStats;
    followingStats: IAdvancedGroupStats;
}
