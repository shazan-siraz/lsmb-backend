import { NextFunction, Request, Response } from "express";
import { RegisterPackageServices } from "./registerPackage.service";

const createRegisterPackage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await RegisterPackageServices.createRegisterPackageIntoDB(
      req.body
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Register Package is created successfully",
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   message: "Something went wrong",
    //   error: err,
    // });

    next();
  }
};

const getAllRegisterPackage = async (req: Request, res: Response) => {
  const result = await RegisterPackageServices.getAllRegisterPackageFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Register Package is retrieve successfully",
    data: result,
  });
};

export const RegisterPackageControllers = {
  createRegisterPackage,
  getAllRegisterPackage,
};
