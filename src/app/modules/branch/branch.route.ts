import express, { NextFunction, Request, Response } from "express";
import { BranchControllers } from "./branch.controller";

const router = express.Router();

router.get("/allBranch/:email", BranchControllers.getAllBranch);
router.get("/:email", BranchControllers.getSingleBranch);

export const BranchRoutes = router;
