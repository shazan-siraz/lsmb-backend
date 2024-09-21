import express from "express";
import { FdrControllers } from "./fdr.controller";

const router = express.Router();

router.post("/create-fdr", FdrControllers.createFdr);

router.get("/", FdrControllers.getAllFdr);

export const FdrRoutes = router;
