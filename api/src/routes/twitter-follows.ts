import { IStatsInternalResponse, IStatsResponse } from './../interfaces/stats-response';
import { IUserObject } from './../interfaces/user-object';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as express from 'express';
import { TwitterService } from '../services/twitter.service';
import underscore from 'underscore';
import { IAdvancedGroupStats, IAdvancedStatsInternalResponse, IAdvancedStatsResponse } from './../interfaces/advanced-stats-response';

const handleError = (error: string[], response: any) => {
    for (const line in error) {
        if (error.hasOwnProperty(line)) {
            console.error(error[line]);
        }
    }
    response.status(500).send({
        message: 'An error occurred when calling the Twitter API',
    });
    return of(null);
};

const mapUserObjectToStatSlice = (numUsers: number) => {
    return (userObject: IUserObject) => {
        return {
            general: {
                averageFollowersCount: userObject.followers_count / numUsers,
                averageFollowingCount: userObject.friends_count / numUsers,
                protectedCount: {
                    are: userObject.protected ? 1 / numUsers : 0,
                    areNot: !userObject.protected ? 1 / numUsers : 0,
                },
                verifiedCount: {
                    are: userObject.verified ? 1 / numUsers : 0,
                    areNot: !userObject.verified ? 1 / numUsers : 0,
                },
            },
        };
    };
};

const reduceSlicesToStats = (prevValue: IAdvancedGroupStats, currValue: IAdvancedGroupStats) => {
    return {
        general: {
            averageFollowersCount: prevValue.general.averageFollowersCount + currValue.general.averageFollowersCount,
            averageFollowingCount: prevValue.general.averageFollowingCount + currValue.general.averageFollowingCount,
            protectedCount: {
                are: prevValue.general.protectedCount.are + currValue.general.protectedCount.are,
                areNot: prevValue.general.protectedCount.areNot + currValue.general.protectedCount.areNot,
            },
            verifiedCount: {
                are: prevValue.general.verifiedCount.are + currValue.general.verifiedCount.are,
                areNot: prevValue.general.verifiedCount.areNot + currValue.general.verifiedCount.areNot,
            },
        },
        demographics: {},
    };
};

export const register = (app: express.Application) => {
    const twitterService = new TwitterService();
    app.get('/users', (req, res) => {
        const q = req.query.q as string;

        if (!q) {
            res.status(400).send({
                message: 'Search query must not be empty.',
            });
        } else {
            twitterService
                .searchUsers(q)
                .pipe(catchError((err) => handleError(err, res)))
                .subscribe((result) => {
                    if (result) {
                        res.send(result.data);
                    }
                });
        }
    });

    app.get('/users/:userId(\\d+)/basic', (req, res) => {
        const userId = req.params.userId;

        if (!userId) {
            res.status(400).send({
                message: 'User id must be defined.',
            });
        } else {
            twitterService
                .getUserStats(userId)
                .pipe(catchError((err) => handleError(err, res)))
                .subscribe((result: IStatsInternalResponse) => {
                    if (result) {
                        // other properties: next_cursor, next_cursor_str, previous_cursor, previous_cursor_str, total_count
                        const followerIds: string[] = result.followers.ids;
                        const followingIds: string[] = result.following.ids;
                        const mutualIds: string[] = underscore.intersection(followerIds, followingIds);
                        const statsResponse: IStatsResponse = {
                            followerCount: followerIds.length,
                            followingCount: followingIds.length,
                            mutualCount: mutualIds.length,
                        };
                        res.send(statsResponse);
                    }
                });
        }
    });

    app.get('/users/:userId(\\d+)/advanced', (req, res) => {
        const userId = req.params.userId;

        if (!userId) {
            res.status(400).send({
                message: 'User id must be defined',
            });
        } else {
            twitterService
                .getUserAdvancedStats(userId)
                .pipe(catchError((err) => handleError(err, res)))
                .subscribe((result: IAdvancedStatsInternalResponse) => {
                    // TODO: refactor into separate method
                    if (result) {
                        const responseData: IAdvancedStatsResponse = {
                            followerStats: result.followers
                                .map(mapUserObjectToStatSlice(result.followers.length))
                                .reduce(reduceSlicesToStats, {
                                    general: {
                                        averageFollowersCount: 0,
                                        averageFollowingCount: 0,
                                        protectedCount: { are: 0, areNot: 0 },
                                        verifiedCount: { are: 0, areNot: 0 },
                                    },
                                    demographics: null,
                                }),
                            followingStats: result.following
                                .map(mapUserObjectToStatSlice(result.following.length))
                                .reduce(reduceSlicesToStats, {
                                    general: {
                                        averageFollowersCount: 0,
                                        averageFollowingCount: 0,
                                        protectedCount: { are: 0, areNot: 0 },
                                        verifiedCount: { are: 0, areNot: 0 },
                                    },
                                    demographics: null,
                                }),
                        };
                        res.send(responseData);
                    }
                });
        }
    });
};
