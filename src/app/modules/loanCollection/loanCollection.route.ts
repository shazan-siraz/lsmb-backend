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

router.post(
  "/update-loanCollection",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  LoanCollectionControllers.updateLoanCollection
);

router.post(
  "/deleteLoanCollection",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  LoanCollectionControllers.deleteLoanCollection
);

router.get(
  "/totalLoanCollection/:email",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanCollectionControllers.totalLoanCollection
);

router.get(
  "/lastLoanCollection/:loanNo",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  LoanCollectionControllers.lastLoanCollection
);

router.get(
  "/todayLoanCollection/:email",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  LoanCollectionControllers.todayLoanCollection
);

router.get(
  "/getTotalLoanCollectionAmount/:email",
  // auth(USER_ROLE.manager, USER_ROLE.branch, USER_ROLE.accountant, USER_ROLE.fieldOfficer),
  LoanCollectionControllers.getTotalLoanCollectionAmount
);

router.get(
  "/getOneAccountTotalLoanCollectionAmount/:id",
  // auth(USER_ROLE.manager, USER_ROLE.branch, USER_ROLE.accountant, USER_ROLE.fieldOfficer),
  LoanCollectionControllers.getOneAccountTotalLoanCollectionAmount
);

export const LoanCollectionRoutes = router;
