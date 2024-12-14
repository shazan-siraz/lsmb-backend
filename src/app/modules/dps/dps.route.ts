import express, { NextFunction, Request, Response } from "express";
import { DpsControllers } from "./dps.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-dps",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  DpsControllers.createDps
);

router.get("/searchDpsAccount", DpsControllers.searchDpsAccount);

router.get(
  "/",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  DpsControllers.getAllDps
);

router.get(
  "/getSingleDps/:id",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  DpsControllers.getSingleDps
);

router.get(
  "/getSingleDpsById/:id",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  DpsControllers.getSingleDpsById
);

export const DpsRoutes = router;


