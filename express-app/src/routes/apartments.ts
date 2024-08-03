import express from "express";
import {getApartmentDetails, getApartments} from "../controllers/appartementsController";

const apartmentsRoutes = express.Router();

apartmentsRoutes.get("/:id", getApartmentDetails);

apartmentsRoutes.get("/", getApartments);

export default apartmentsRoutes;



