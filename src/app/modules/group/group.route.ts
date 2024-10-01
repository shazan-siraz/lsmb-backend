import express from "express";
import { groupController } from "./group.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post("/create-group", auth(USER_ROLE.admin), groupController.createGroup);
router.get("/", auth(USER_ROLE.admin), groupController.getAllGroup);
router.patch('/update-group', groupController.updateGroup)

export const groupRoutes = router;
