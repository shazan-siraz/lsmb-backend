import { NextFunction, Request, Response } from "express";
import { EmployeeServices } from "./employee.service";

const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, employee } = req.body;

    console.log(req.body);


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

export const EmployeeController = {
    createEmployee
}
