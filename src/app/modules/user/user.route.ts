import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post(
  "/create-admin",
  auth(USER_ROLE.superAdmin),
  UserControllers.createAdmin
);
router.post(
  "/create-branch",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  UserControllers.createBranch
);
router.post("/create-superAdmin", UserControllers.createSuperAdmin);

export const UserRoutes = router;
