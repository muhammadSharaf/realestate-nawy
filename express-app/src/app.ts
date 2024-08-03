import express, {Express} from 'express';
const cors = require('cors');
import {json} from 'body-parser';
import {Sequelize} from "sequelize";

import sequelize from './utils/database';
import apartmentsRoutes from "./routes/apartments";
import adminRoutes from "./routes/admin";

const app: Express = express();

app.use(cors());
app.use(json());

app.use('/admin', adminRoutes);

app.use('/apartments', apartmentsRoutes);

sequelize.sync().then((res: Sequelize) => {
    console.log('Database synchronized');
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}).catch((err: Sequelize) => {
    console.log('err', err);
})
