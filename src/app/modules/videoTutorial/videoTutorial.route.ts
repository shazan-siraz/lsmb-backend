import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { VideoTutorialControllers } from "./videoTutorial.controller";

const router = express.Router();

router.post(
  "/create-videoTutorial",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  VideoTutorialControllers.createVideoTutorial
);
router.get(
  "/",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  VideoTutorialControllers.getAllVideoTutorial
);

router.delete(
  "/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  VideoTutorialControllers.deleteVideoTutorial
);

export const VideoTutorialRoutes = router;
