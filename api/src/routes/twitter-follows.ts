import * as express from 'express';
import { TwitterService } from '../services/twitter.service';

export const register = (app: express.Application) => {
    app.get('/users', async (req, res) => {
        const q = req.query.q as string;

        if (!q) {
            res.status(400).send({
                message: 'Search query must not be empty.',
            });
        } else {
            const twitterService = new TwitterService();
            const result = await twitterService.searchUsers(q);
            res.send(result.data);
        }
    });
};
