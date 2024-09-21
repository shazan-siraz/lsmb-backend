import { Request, Response } from "express";
import { FdrServices } from "./fdr.service";

const createFdr = async (req: Request, res: Response) => {
  try {
    const result = await FdrServices.createFdrIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Fdr is created successfully",
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

const getAllFdr = async (req: Request, res: Response) => {
  const result = await FdrServices.getAllFdrFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Fdr are retrieve successfully",
    data: result,
  });
};

export const FdrControllers = {
  createFdr,
  getAllFdr,
};
