import express, { NextFunction, Request, Response } from "express";
import { SavingWithdrawControllers } from "./savingWithdraw.controller";

const router = express.Router();

router.post(
  "/create-savingWithdraw",
  SavingWithdrawControllers.createSavingWithdrawTransaction
);
router.get("/", SavingWithdrawControllers.getAllSavingWithdrawTransaction);

export const SavingWithdrawRoutes = router;
