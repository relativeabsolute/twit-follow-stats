export interface IBooleanCount {
    are: number;
    areNot: number;
}

export interface IAdvancedGeneralStats {
    averageFollowersCount: number;
    averageFollowingCount: number;
    protectedCount: IBooleanCount;
    verifiedCount: IBooleanCount;
}

export interface IAdvancedDemographicStats {}

export interface IAdvancedGroupStats {
    general: IAdvancedGeneralStats;
    demographics: IAdvancedDemographicStats;
}

export interface IAdvancedStatsObject {
    followerStats: IAdvancedGroupStats;
    followingStats: IAdvancedGroupStats;
}
