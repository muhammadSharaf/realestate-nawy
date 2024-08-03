"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApartmentDetails = exports.getApartments = void 0;
const Apartment_1 = __importDefault(require("../models/Apartment"));
const getApartments = (req, res, next) => {
    Apartment_1.default.findAll().then(apartments => {
        console.log('apartments s', apartments);
        res.status(200).json(apartments);
    }).catch(err => {
        console.log('err', err);
        res.status(404).json({ message: "Couldn't fetch apartments" });
    });
};
exports.getApartments = getApartments;
const getApartmentDetails = (req, res, next) => {
    const apartmentId = req.params.id;
    Apartment_1.default.findByPk(apartmentId).then(apartment => {
        res.status(200).json(apartment);
    }).catch(err => {
        console.log('err', err);
        res.status(404).json({ message: "Couldn't find an apartment for the given id" });
    });
};
exports.getApartmentDetails = getApartmentDetails;
//# sourceMappingURL=appartementsController.js.map