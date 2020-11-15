import express from 'express';
import { api, twitterFollows } from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());

api.register(app);

twitterFollows.register(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
