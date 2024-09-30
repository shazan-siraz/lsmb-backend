import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-admin", UserControllers.createAdmin);

export const UserRoutes = router;
