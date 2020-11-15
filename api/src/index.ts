import express from 'express';
import { api, twitterFollows } from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;
const corsOrigin = process.env.CORS_ORIGIN;

const corsOptions = {
    origin: corsOrigin,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

api.register(app);

twitterFollows.register(app);

app.listen(port, () => {
    // TODO: use a better logging solution
    console.log(`server started at http://localhost:${port}`);
});
