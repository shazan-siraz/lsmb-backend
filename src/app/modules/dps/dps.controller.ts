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

const getSingleDps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await DpsServices.getSingleDpsFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "Dps is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleDpsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await DpsServices.getSingleDpsByIdFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "Dps is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTotalDpsAmount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await DpsServices.getTotalDpsAmountFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Total Dps amount is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const searchDpsAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const searchQuery = req.query.query;
    const searchEmail = req.query.email;

    const result = await DpsServices.searchDpsAccountFromDB(
      searchQuery,
      searchEmail
    );

    // send response
    res.status(200).json({
      success: true,
      message: "DpsAccount searching successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const DpsControllers = {
  createDps,
  getAllDps,
  getSingleDps,
  getTotalDpsAmount,
  searchDpsAccount,
  getSingleDpsById
};
