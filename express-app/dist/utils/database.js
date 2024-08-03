"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
});
// LOCAL
// const sequelize = new Sequelize('realestate', 'root', 'adminadmin', {
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql',
// });
exports.default = sequelize;
//# sourceMappingURL=database.js.map