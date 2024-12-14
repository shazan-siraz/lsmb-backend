import { NextFunction, Request, Response } from "express";
import { SavingTransactionServices } from "./savingTransaction.service";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

const createSavingTransaction = async (req: Request, res: Response) => {
  try {
    const result =
      await SavingTransactionServices.createSavingTransactionIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Transaction is created successfully",
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

const getAllSavingTransaction = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.cookies;
    const decoded = jwtDecode<JwtPayload>(refreshToken);

    const result =
      await SavingTransactionServices.getAllSavingTransactionFromDB(
        decoded?.email
      );

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Transaction is retrieve successfully",
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

const getTotalSavingTransactionAmount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result =
      await SavingTransactionServices.getTotalSavingTransactionAmountFromDB(
        email
      );

    // send response
    res.status(200).json({
      success: true,
      message: "Total Saving Transaction is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const todaySavingTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await SavingTransactionServices.todaySavingTransactionFromDB(
      email
    );

    // send response
    res.status(200).json({
      success: true,
      message: "today Saving Transaction is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSavingTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;
    const updateData = {
      savingsAmount: req.body.amount,
      transactionNote: req.body.transactionNote,
    };

    const result =
      await SavingTransactionServices.updateSavingTransactionFromDB(
        id,
        updateData
      );

    // send response
    res.status(200).json({
      success: true,
      message: "updated Saving Transaction successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteSavingTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;

    const result =
      await SavingTransactionServices.deleteSavingTransactionFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "Delete Saving Transaction successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const SavingTransactionControllers = {
  createSavingTransaction,
  getAllSavingTransaction,
  getTotalSavingTransactionAmount,
  todaySavingTransaction,
  updateSavingTransaction,
  deleteSavingTransaction,
};
