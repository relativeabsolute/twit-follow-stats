import express from 'express';
import { twitterFollows } from './routes';
import dotenv from 'dotenv';
import cors from 'cors';
import { urlencoded } from 'body-parser';
import methodOverride from 'method-override';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;
const corsOrigin = process.env.CORS_ORIGIN;

console.log(`accepting requests from ${corsOrigin}`);

const corsOptions = {
    origin: corsOrigin,
    optionsSuccessStatus: 200,
};

app.use(
    urlencoded({
        extended: true,
    }),
);
app.use(methodOverride());
app.use(cors(corsOptions));
app.use(express.static('./dist/public'));

twitterFollows.register(app);

app.listen(port, () => {
    // TODO: use a better logging solution
    console.log(`server started at http://localhost:${port}`);
});
