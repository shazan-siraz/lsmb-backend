import express, { NextFunction, Request, Response } from "express";
import { BranchControllers } from "./branch.controller";

const router = express.Router();

router.get("/", BranchControllers.getAllBranch);

export const BranchRoutes = router;
