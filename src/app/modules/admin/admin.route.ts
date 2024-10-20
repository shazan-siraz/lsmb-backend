import express, { NextFunction, Request, Response } from "express";
import { AdminControllers } from "./admin.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.get("/", AdminControllers.getAllAdmin);
router.get("/:email", auth(USER_ROLE.admin), AdminControllers.getSingleAdmin);

export const AdminRoutes = router;
