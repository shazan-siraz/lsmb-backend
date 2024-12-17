import express from "express";
import { LoanControllers } from "./loan.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-loan",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.createLoan
);
router.get(
  "/",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.getAllLoan
);

router.get(
  "/pending-loan/:email",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.getPendingLoan
);

router.patch(
  "/statusUpdate-loan",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.updateLoan
);
router.get(
  "/overdue-loan",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.getOverdueLoan
);
router.get(
  "/searchLoan",
  // auth(USER_ROLE.manager, USER_ROLE.branch, USER_ROLE.accountant, USER_ROLE.fieldOfficer),
  LoanControllers.searchLoan
);

router.get(
  "/active-loan/:email",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.getActiveLoan
);

router.get(
  "/getTotalLoanAmountWithoutPorcessFees/:email",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  LoanControllers.getTotalLoanAmountWithoutPorcessFees
);

router.get(
  "/getLastLoanDocument/:email",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  LoanControllers.getLastLoanDocument
);

router.get(
  "/:id",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanControllers.getSingleLoan
);

export const LoanRoutes = router;
