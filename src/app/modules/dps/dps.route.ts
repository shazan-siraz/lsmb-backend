import express, { NextFunction, Request, Response } from "express";
import { DpsControllers } from "./dps.controller";

const router = express.Router();

router.post("/create-dps", DpsControllers.createDps);

router.get("/", DpsControllers.getAllDps);

export const DpsRoutes = router;