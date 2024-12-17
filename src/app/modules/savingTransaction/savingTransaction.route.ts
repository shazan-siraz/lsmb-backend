import express, { NextFunction, Request, Response } from "express";
import { SavingTransactionControllers } from "./savingTransaction.controller";

const router = express.Router();

router.post(
  "/create-savingTransaction",
  SavingTransactionControllers.createSavingTransaction
);
router.get("/", SavingTransactionControllers.getAllSavingTransaction);

router.get(
  "/getTotalSavingtxnAmount/:email",
  SavingTransactionControllers.getTotalSavingTransactionAmount
);

router.get(
  "/todaySavingTxn/:email",
  SavingTransactionControllers.todaySavingTransaction
);

router.post(
  "/updateSavingTransaction",
  SavingTransactionControllers.updateSavingTransaction
);

router.post(
  "/deleteSavingTransaction",
  SavingTransactionControllers.deleteSavingTransaction
);

router.get(
  "/getTotalSavingAmountByOneMember/:id",
  SavingTransactionControllers.getTotalSavingAmountByOneMember
);

router.get(
  "/getUniqueMemberSavings/:email",
  SavingTransactionControllers.getUniqueMemberSavings
);

export const SavingTransactionRoutes = router;
