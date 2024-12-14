import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import { DpsCollectionServices } from "./dpsCollection.service";

const createDpsCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DpsCollectionServices.createDpsCollectionIntoDB(
      req.body
    );

    // send response
    res.status(200).json({
      success: true,
      message: "DpsCollection is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllDpsCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await DpsCollectionServices.getAllDpsCollectionFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "DpsCollection are retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const todayDpsCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await DpsCollectionServices.todayDpsCollectionFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Today DpsCollection are retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTotalDpsBalaceByOneDpsAc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { dpsAcNo } = req.params;

    const result =
      await DpsCollectionServices.getTotalDpsBalaceByOneDpsAcFromDB(dpsAcNo);

    // send response
    res.status(200).json({
      success: true,
      message: "Total Dps Balance By One Dps Account is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTotalDpsCollectionBalace = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result =
      await DpsCollectionServices.getTotalDpsCollectionBalaceFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Total Dps Balance By is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const DpsCollectionControllers = {
  createDpsCollection,
  getAllDpsCollection,
  todayDpsCollection,
  getTotalDpsBalaceByOneDpsAc,
  getTotalDpsCollectionBalace,
};
