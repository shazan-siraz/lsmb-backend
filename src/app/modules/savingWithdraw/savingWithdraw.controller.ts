import { Request, Response } from "express";
import { SavingWithdrawServices } from "./savingWithdraw.service";

const createSavingWithdrawTransaction = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getAllSavingWithdrawTransaction = async (req: Request, res: Response) => {
  try {
    const result = await SavingWithdrawServices.getAllSavingWithdrawFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Withdraw is retrieve successfully",
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

export const SavingWithdrawControllers = {
  createSavingWithdrawTransaction,
  getAllSavingWithdrawTransaction,
};
