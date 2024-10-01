import express, { NextFunction, Request, Response } from "express";
import { AuthControllers } from "./auth.controller";
import { USER_ROLE } from "../user/user.constant";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post("/login", AuthControllers.loginUser);
router.post(
  "/change-password",
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.manager,
    USER_ROLE.fieldOfficer
  ),
  AuthControllers.changePassword
);

router.post("/refresh-token", AuthControllers.refreshToken);

export const AuthRoutes = router;
