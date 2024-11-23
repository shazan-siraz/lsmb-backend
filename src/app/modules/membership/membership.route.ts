import express, { NextFunction, Request, Response } from "express";
import { MembershipControllers } from "./membership.controller";

const router = express.Router();

router.post("/create-membership", MembershipControllers.createMembership);
router.get("/:email", MembershipControllers.getAllMembership);
router.get("/single-membership/:id", MembershipControllers.getSingleMembership);
router.get("/findMember", MembershipControllers.findMember);

export const MemberShipRoutes = router;
