import express, { NextFunction, Request, Response } from "express";
import { MembershipControllers } from "./membership.controller";

const router = express.Router();

router.post("/create-membership", MembershipControllers.createMembership);
router.get("/", MembershipControllers.getAllMembership);
router.get("/single-membership/:id", MembershipControllers.getSingleMembership);

export const MemberShipRoutes = router;
