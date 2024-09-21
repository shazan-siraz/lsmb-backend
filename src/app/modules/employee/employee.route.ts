import express, { NextFunction, Request, Response } from "express";
import { employeeControllers } from "./employee.controller";

const router = express.Router();

router.post("/create-employee", employeeControllers.createEmployee);

router.get("/", employeeControllers.getAllEmployee);

export const EmployeeRoutes = router;
