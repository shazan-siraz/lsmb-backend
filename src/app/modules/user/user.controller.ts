import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const UserControllers = {
  createAdmin,
};