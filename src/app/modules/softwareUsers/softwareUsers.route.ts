import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { SoftwareUsersControllers } from "./softwareUsers.controller";

const router = express.Router();

router.post(
  "/create-softwareUsers",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SoftwareUsersControllers.createSoftwareUsers
);
router.get(
  "/",
  SoftwareUsersControllers.getAllSoftwareUsers
);

router.delete(
  "/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SoftwareUsersControllers.deleteSoftwareUsers
);

export const SoftwareUsersRoutes = router;
