import express, { NextFunction, Request, Response } from "express";
import { MembershipControllers } from "./membership.controller";

const router = express.Router();

router.post("/create-membership", MembershipControllers.createMembership);
router.get("/searchMember", MembershipControllers.searchMember);
router.get("/getAllMember/:email", MembershipControllers.getAllMembership);
router.get(
  "/getAllSavingMember/:email",
  MembershipControllers.getAllSavingMembership
);
router.get(
  "/getTotalMemberAccountBalaceAndProcessFees/:email",
  MembershipControllers.getTotalMemberAccountBalaceAndProcessFees
);
router.get("/single-membership/:id", MembershipControllers.getSingleMembership);

export const MemberShipRoutes = router;

