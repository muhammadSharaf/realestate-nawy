"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appartementsController_1 = require("../controllers/appartementsController");
const apartmentsRoutes = express_1.default.Router();
apartmentsRoutes.get("/:id", appartementsController_1.getApartmentDetails);
apartmentsRoutes.get("/", appartementsController_1.getApartments);
exports.default = apartmentsRoutes;
//# sourceMappingURL=apartments.js.map