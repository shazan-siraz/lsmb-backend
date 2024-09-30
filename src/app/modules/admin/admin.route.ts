import express, { NextFunction, Request, Response } from "express";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.get("/", AdminControllers.getAllAdmin);

export const AdminRoutes = router;
