import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, superAdmin: superAdminData } = req.body;
    const result = await UserServices.createSuperAdminIntoDB(
      password,
      superAdminData
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Super Admin is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, admin: adminData } = req.body;
    const result = await UserServices.createAdminIntoDB(password, adminData);

    // send response
    res.status(200).json({
      success: true,
      message: "Admin is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createBranch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, branch: branchData } = req.body;
    const result = await UserServices.createBranchIntoDB(password, branchData);

    // send response
    res.status(200).json({
      success: true,
      message: "Branch is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createAdmin,
  createBranch,
  createSuperAdmin,
};
