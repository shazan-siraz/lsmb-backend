import express from "express";
import { LoanControllers } from "./loan.controller";

const router = express.Router();

router.post("/create-loan", LoanControllers.createLoan);
router.get("/", LoanControllers.getAllLoan);
router.get("/pending-loan", LoanControllers.getPendingLoan);
router.get("/active-loan", LoanControllers.getActiveLoan);
router.patch("/statusUpdate-loan", LoanControllers.updateLoan);

export const LoanRoutes = router;
