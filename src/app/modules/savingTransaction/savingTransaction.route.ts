import express, { NextFunction, Request, Response } from "express";
import { SavingTransactionControllers } from "./savingTransaction.controller";

const router = express.Router();

router.post(
  "/create-savingTransaction",
  SavingTransactionControllers.createSavingTransaction
);
router.get("/", SavingTransactionControllers.getAllSavingTransaction);

export const SavingTransactionRoutes = router;
