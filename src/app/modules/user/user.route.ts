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

router.post("/create-superAdmin", UserControllers.createSuperAdmin);

router.post("/create-company", UserControllers.createCompany);

router.post("/create-branch", UserControllers.createBranch);

router.get("/:email", UserControllers.getSingleUser);

router.patch(
  "/updateUserStatus",
  // auth(USER_ROLE.superAdmin),
  UserControllers.updateUserStatus
);

router.patch(
  "/blockedUserStatus",
  // auth(USER_ROLE.superAdmin),
  UserControllers.blockedUserStatus
);

export const UserRoutes = router;
