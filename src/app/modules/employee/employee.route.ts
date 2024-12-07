import express from "express";
import { EmployeeController } from "./employee.controller";
import { USER_ROLE } from "../user/user.constant";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create-employee",
  auth(USER_ROLE.branch, USER_ROLE.manager),
  EmployeeController.createEmployee
);

router.get(
  "/:email",
  auth(USER_ROLE.branch, USER_ROLE.manager, USER_ROLE.accountant, USER_ROLE.fieldOfficer),
  EmployeeController.getAllEmployee
);

router.get(
  "/getSingleEmployee/:email",
  // auth(
  //   USER_ROLE.branch,
  //   USER_ROLE.manager,
  //   USER_ROLE.fieldOfficer,
  //   USER_ROLE.accountant
  // ),
  EmployeeController.getSingleEmployee
);

export const EmployeeRoutes = router;
