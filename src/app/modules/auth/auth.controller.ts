import { Request, Response, NextFunction } from "express";
import { AuthServices } from "./auth.service";
import config from "../../config";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthServices.loginUserfromDB(req.body);
    const { refreshToken, accessToken } = result;

    res.cookie("refreshToken", refreshToken, {
      secure: config.NODE_ENV === "production",
      httpOnly: true,
    });

    // send response
    res.status(200).json({
      success: true,
      message: "User is logged in successfully",
      data: { accessToken },
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

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    const result = await AuthServices.refreshTokenFromService(refreshToken);

    // send response
    res.status(200).json({
      success: true,
      message: "Access token is retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  loginUser,
  changePassword,
  refreshToken,
};
