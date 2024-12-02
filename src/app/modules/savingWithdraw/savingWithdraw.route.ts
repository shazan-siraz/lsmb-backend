import express, { NextFunction, Request, Response } from "express";
import { SavingWithdrawControllers } from "./savingWithdraw.controller";

const router = express.Router();

router.post(
  "/create-savingWithdraw",
  SavingWithdrawControllers.createSavingWithdrawTransaction
);

router.get("/getTotalSavingWithdraw/:email", SavingWithdrawControllers.getTotalSavingWithdraw);

router.get(
  "/getOneMemberAllSavingWithdraw/:id",
  SavingWithdrawControllers.getOneMemberAllSavingWithdraw
);

export const SavingWithdrawRoutes = router;

