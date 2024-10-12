import express from "express";
import { LoanControllers } from "./loan.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-loan",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.manager),
  LoanControllers.createLoan
);
router.get(
  "/",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.manager),
  LoanControllers.getAllLoan
);
router.get(
  "/pending-loan",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.manager),
  LoanControllers.getPendingLoan
);
router.get(
  "/active-loan",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.manager),
  LoanControllers.getActiveLoan
);
router.patch(
  "/statusUpdate-loan",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.manager),
  LoanControllers.updateLoan
);
router.get(
  "/overdue-loan",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.manager),
  LoanControllers.getOverdueLoan
);

export const LoanRoutes = router;
