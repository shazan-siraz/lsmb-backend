import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-admin", UserControllers.createAdmin);
router.post("/create-branch", UserControllers.createBranch);
router.post("/create-employee", UserControllers.createEmployee);

export const UserRoutes = router;
