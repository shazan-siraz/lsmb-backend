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

const createCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, company: companyData } = req.body;
    const result = await UserServices.createCompanyIntoDB(
      password,
      companyData
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Company is created successfully",
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

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserServices.getSingleUserFromDB(req.params.email);

    // send response
    res.status(200).json({
      success: true,
      message: "User is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const result = await UserServices.updateUserStatusFromDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const blockedUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserServices.blockedUserStatusFromDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "User status updated successfully",
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
  createCompany,
  getSingleUser,
  updateUserStatus,
  blockedUserStatus
};
