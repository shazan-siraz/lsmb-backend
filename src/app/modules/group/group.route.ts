import express from "express";
import { groupController } from "./group.controller";

const router = express.Router();

router.post("/create-group", groupController.createGroup);
router.get("/", groupController.getAllGroup);
router.patch('/update-group', groupController.updateGroup)

export const groupRoutes = router;
