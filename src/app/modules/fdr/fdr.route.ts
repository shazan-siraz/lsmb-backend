import express from "express";
import { FdrControllers } from "./fdr.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-fdr",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  FdrControllers.createFdr
);

router.get(
  "/",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  FdrControllers.getAllFdr
);

router.get(
  "/getSingleFdr/:id",
  // auth(USER_ROLE.manager, USER_ROLE.branch),
  FdrControllers.getSingleFdr
);

export const FdrRoutes = router;

