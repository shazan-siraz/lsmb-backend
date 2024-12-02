import { NextFunction, Request, Response } from "express";
import { PackageServices } from "./package.service";

const createPackage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await PackageServices.createPackageIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Package is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllPackage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await PackageServices.getAllPackageFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: "Package are retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const PackageController = {
  createPackage,
  getAllPackage
};
