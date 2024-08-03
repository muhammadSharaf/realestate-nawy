import express, {Express} from 'express';
import {json} from 'body-parser';
import {Sequelize} from "sequelize";

import sequelize from './utils/database';

const app: Express = express();

app.use(json());

sequelize.sync().then((res: Sequelize) => {
    console.log('Database synchronized');
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}).catch((err: Sequelize) => {
    console.log('err', err);
})
