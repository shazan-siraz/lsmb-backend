import express, { NextFunction, Request, Response } from "express";
import { RegisterPackageControllers } from "./registerPackage.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-registerPackage",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  RegisterPackageControllers.createRegisterPackage
);
router.get(
  "/",
  RegisterPackageControllers.getAllRegisterPackage
);

router.delete(
  "/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  RegisterPackageControllers.deleteRegisterPackage
);

export const RegisterPackageRoutes = router;

