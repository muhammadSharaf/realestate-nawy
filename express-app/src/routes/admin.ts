import express from "express";
import {addApartment} from "../controllers/adminController";

const adminRoutes = express.Router();

adminRoutes.post("/addApartment", addApartment);

export default adminRoutes;



