import express from "express";
import { FdrControllers } from "./fdr.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-fdr",
  auth(USER_ROLE.admin, USER_ROLE.manager),
  FdrControllers.createFdr
);

router.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.manager),
  FdrControllers.getAllFdr
);

export const FdrRoutes = router;
