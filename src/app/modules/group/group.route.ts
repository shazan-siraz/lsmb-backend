import express from "express";
import { groupController } from "./group.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-group",
  auth(USER_ROLE.manager, USER_ROLE.branch),
  groupController.createGroup
);

router.patch(
  "/update-group",
  auth(
    USER_ROLE.branch,
    USER_ROLE.manager,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  groupController.updateGroup
);

router.get(
  "/:email",
  auth(
    USER_ROLE.branch,
    USER_ROLE.manager,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  groupController.getAllGroup
);

export const groupRoutes = router;
