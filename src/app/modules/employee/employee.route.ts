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
  "/",
  auth(USER_ROLE.branch, USER_ROLE.manager),
  EmployeeController.getAllEmployee
);

export const EmployeeRoutes = router;
