import * as express from 'express';
import { TwitterService } from '../services/twitter.service';

export const register = (app: express.Application) => {
    const twitterService = new TwitterService();
    app.get('/users', (req, res) => {
        const q = req.query.q as string;

        if (!q) {
            res.status(400).send({
                message: 'Search query must not be empty.',
            });
        } else {
            twitterService.searchUsers(q).subscribe((result) => {
                res.send(result.data);
            });
        }
    });

    app.get('/users/:userId(\\d+)/followers', (req, res) => {
        const userId = +req.params.userId;

        if (!userId) {
            res.status(400).send({
                message: 'User id must be defined.',
            });
        } else {
            twitterService.getUserFollowers(userId).subscribe((result) => {
                console.log(JSON.stringify(result, null, '\t'));
                res.status(200);
            });
        }
    });

    app.get('/users/:userId(\\d+)/following', (req, res) => {
        const userId = +req.params.userId;

        if (!userId) {
            res.status(400).send({
                message: 'User id must be defined.',
            });
        } else {
        }
    });
};
