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

const getAllDpsCollectionFromDB = async (
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

export const DpsCollectionControllers = {
  createDpsCollection,
  getAllDpsCollectionFromDB,
};
