import express, { NextFunction, Request, Response } from "express";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { DpsCollectionControllers } from "./dpsCollection.controller";

const router = express.Router();

router.post(
  "/create-dpsCollection",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  DpsCollectionControllers.createDpsCollection
);

router.get(
  "/getAllDpsCollection",
  auth(
    USER_ROLE.manager,
    USER_ROLE.branch,
    USER_ROLE.accountant,
    USER_ROLE.fieldOfficer
  ),
  DpsCollectionControllers.getAllDpsCollectionFromDB
);

export const DpsCollectionRoutes = router;
