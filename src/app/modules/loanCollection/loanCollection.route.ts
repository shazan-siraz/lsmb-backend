import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { LoanCollectionControllers } from "./loanCollection.controller";

const router = express.Router();

router.post(
  "/create-loanCollection",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanCollectionControllers.createLoanCollection
);

router.get(
  "/totalLoanCollection/:email",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanCollectionControllers.totalLoanCollection
);

router.get(
  "/lastLoanCollection/:email",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanCollectionControllers.lastLoanCollection
);

// router.get(
//   "/",
//   auth(USER_ROLE.manager, USER_ROLE.branch),
//   LoanControllers.getAllLoan
// );

export const LoanCollectionRoutes = router;
