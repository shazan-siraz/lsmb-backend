import { NextFunction, Request, Response } from "express";
import { EmployeeServices } from "./employee.service";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, employee } = req.body;

    const result = await EmployeeServices.createEmployeeIntoDB(
      password,
      employee
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Employee is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    const decoded = jwtDecode<JwtPayload>(refreshToken);

    const result = await EmployeeServices.getAllEmployeeFromDB(decoded?.email);

    // send response
    res.status(200).json({
      success: true,
      message: "Employee is retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await EmployeeServices.getSingleEmployeeFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Employee is retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const EmployeeController = {
  createEmployee,
  getAllEmployee,
  getSingleEmployee,
};
