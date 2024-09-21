import { Request, Response } from "express";
import { employeeServices } from "./employee.service";

const createEmployee = async (req: Request, res: Response) => {
  try {
    const result = await employeeServices.createEmployeeIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Employee is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getAllEmployee = async (req: Request, res: Response) => {
  const result = await employeeServices.getAllEmployeeFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Employee are retrieve successfully",
    data: result,
  });
};

export const employeeControllers = {
  createEmployee,
  getAllEmployee,
};
