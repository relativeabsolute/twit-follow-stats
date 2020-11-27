import express from 'express';
import { twitterFollows } from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;
const corsOrigin = process.env.CORS_ORIGIN;

const corsOptions = {
    origin: corsOrigin,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static('./dist/public'));

twitterFollows.register(app);

app.listen(port, () => {
    // TODO: use a better logging solution
    console.log(`server started at http://localhost:${port}`);
});
