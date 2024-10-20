import express, { NextFunction, Request, Response } from "express";
import { DpsControllers } from "./dps.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-dps",
  auth(USER_ROLE.admin, USER_ROLE.manager),
  DpsControllers.createDps
);

router.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.manager),
  DpsControllers.getAllDps
);

export const DpsRoutes = router;
