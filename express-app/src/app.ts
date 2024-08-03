import express, {Express} from 'express';
import {json} from 'body-parser';

const app: Express = express();

app.use(json());

app.listen(3000);
