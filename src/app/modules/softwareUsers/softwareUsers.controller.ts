import { NextFunction, Request, Response } from "express";
import { SoftwareUsersServices } from "./softwareUsers.service";

const createSoftwareUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SoftwareUsersServices.createSoftwareUsersIntoDB(
      req.body
    );

    // send response
    res.status(200).json({
      success: true,
      message: "SoftwareUsers is Added successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllSoftwareUsers = async (req: Request, res: Response) => {
  const result = await SoftwareUsersServices.getAllSoftwareUsersFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "softwareUsers are retrieve successfully",
    data: result,
  });
};

const deleteSoftwareUsers = async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await SoftwareUsersServices.deleteSoftwareUsersFromDB(id);

  // send response
  res.status(200).json({
    success: true,
    message: "SoftwareUsers is deleted successfully",
    data: result,
  });
};

export const SoftwareUsersControllers = {
  createSoftwareUsers,
  getAllSoftwareUsers,
  deleteSoftwareUsers,
};
