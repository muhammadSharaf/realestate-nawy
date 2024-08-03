"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_1 = __importDefault(require("./utils/database"));
const apartments_1 = __importDefault(require("./routes/apartments"));
const admin_1 = __importDefault(require("./routes/admin"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/admin', admin_1.default);
app.use('/apartments', apartments_1.default);
database_1.default.sync().then((res) => {
    console.log('Database synchronized');
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}).catch((err) => {
    console.log('err', err);
});
//# sourceMappingURL=app.js.map