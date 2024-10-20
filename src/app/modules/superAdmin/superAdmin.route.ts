import express, { NextFunction, Request, Response } from "express";
import { SuperAdminControllers } from "./superAdmin.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.get("/", SuperAdminControllers.getAllSuperAdmin);
router.get(
  "/:email",
  auth(USER_ROLE.superAdmin),
  SuperAdminControllers.getSingleSuperAdmin
);

export const SuperAdminRoutes = router;
