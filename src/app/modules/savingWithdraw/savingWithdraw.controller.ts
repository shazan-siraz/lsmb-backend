import { NextFunction, Request, Response } from "express";
import { SavingWithdrawServices } from "./savingWithdraw.service";

const createSavingWithdrawTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SavingWithdrawServices.createSavingWithdrawIntoDB(
      req.body
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Withdraw is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTotalSavingWithdraw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    const result = await SavingWithdrawServices.getTotalSavingWithdrawFromDB(
      email
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Withdraw are retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getOneMemberAllSavingWithdraw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result =
      await SavingWithdrawServices.getOneMemberAllSavingWithdrawFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Withdraw is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const SavingWithdrawControllers = {
  createSavingWithdrawTransaction,
  getTotalSavingWithdraw,
  getOneMemberAllSavingWithdraw,
};
