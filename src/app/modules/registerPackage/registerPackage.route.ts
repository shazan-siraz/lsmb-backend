import express, { NextFunction, Request, Response } from "express";
import { RegisterPackageControllers } from "./registerPackage.controller";

const router = express.Router();

router.post(
  "/create-registerPackage",
  RegisterPackageControllers.createRegisterPackage
);
router.get("/", RegisterPackageControllers.getAllRegisterPackage);

export const RegisterPackageRoutes = router;
