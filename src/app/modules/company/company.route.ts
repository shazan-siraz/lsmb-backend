import express, { NextFunction, Request, Response } from "express";
import { CompanyControllers } from "./company.controller";

const router = express.Router();

router.get("/", CompanyControllers.getAllCompany);

router.get("/:email", CompanyControllers.getSingleCompany);

export const CompanyRoutes = router;
