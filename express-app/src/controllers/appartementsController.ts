import {RequestHandler} from "express";

import Apartment from "../models/Apartment";

export const getApartments: RequestHandler = (req, res, next) => {
    Apartment.findAll().then(apartments => {
        console.log('apartments s', apartments);
        res.status(200).json(apartments);
    }).catch(err => {
        console.log('err', err);
        res.status(404).json({message: "Couldn't fetch apartments"});
    })
}

export const getApartmentDetails: RequestHandler<{id: string}> = (req, res, next) => {
    const apartmentId: string = req.params.id;

    Apartment.findByPk(apartmentId).then(apartment => {
        res.status(200).json(apartment);
    }).catch(err => {
        console.log('err', err);
        res.status(404).json({message: "Couldn't find an apartment for the given id"});
    })
}
