import {RequestHandler} from "express";

import Apartment, {ApartmentDetails} from "../models/Apartment";

export const addApartment: RequestHandler = (req, res, next) => {
    const details: ApartmentDetails = req.body;

    console.log('details', details);

    Apartment.create(details).then(apartment => {
        res.status(201).json(apartment);
    }).catch(err => {
        console.log(err);
        res.status(400).json({message: "Couldn't create apartment, please check your inputs"});
    })
}
