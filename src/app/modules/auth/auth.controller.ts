import { Request, Response, NextFunction } from "express";
import { AuthServices } from "./auth.service";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthServices.loginUserfromDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "User is logged in successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AuthServices.changePasswordFromDB(req.user, req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Password is updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  loginUser,
  changePassword,
};
