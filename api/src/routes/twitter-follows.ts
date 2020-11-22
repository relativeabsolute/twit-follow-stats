import { IStatsInternalResponse, IStatsResponse } from './../interfaces/stats-response';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as express from 'express';
import { TwitterService } from '../services/twitter.service';
import underscore from 'underscore';

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

    app.get('/users/:userId(\\d+)', (req, res) => {
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
};
