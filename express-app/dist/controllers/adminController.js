"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addApartment = void 0;
const Apartment_1 = __importDefault(require("../models/Apartment"));
const addApartment = (req, res, next) => {
    const details = req.body;
    console.log('details', details);
    Apartment_1.default.create(details).then(apartment => {
        res.status(201).json(apartment);
    }).catch(err => {
        console.log(err);
        res.status(400).json({ message: "Couldn't create apartment, please check your inputs" });
    });
};
exports.addApartment = addApartment;
//# sourceMappingURL=adminController.js.map