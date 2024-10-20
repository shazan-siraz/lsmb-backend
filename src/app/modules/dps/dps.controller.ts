import { NextFunction, Request, Response } from "express";
import { DpsServices } from "./dps.service";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

const createDps = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DpsServices.createDpsIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Dps is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllDps = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.cookies;
    const { email } = jwtDecode<JwtPayload>(refreshToken);

    const result = await DpsServices.getAllDpsFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Dps are retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const DpsControllers = {
  createDps,
  getAllDps,
};
