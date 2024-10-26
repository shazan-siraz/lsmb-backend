import { NextFunction, Request, Response } from "express";
import { VideoTutorialServices } from "./videoTutorial.service";

const createVideoTutorial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await VideoTutorialServices.createVideoTutorialIntoDB(
      req.body
    );

    // send response
    res.status(200).json({
      success: true,
      message: "VideoTutorial is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllVideoTutorial = async (req: Request, res: Response) => {
  const result = await VideoTutorialServices.getAllVideoTutorialFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "VideoTutorial are retrieve successfully",
    data: result,
  });
};

const deleteVideoTutorial = async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await VideoTutorialServices.deleteVideoTutorialFromDB(id);

  // send response
  res.status(200).json({
    success: true,
    message: "VideoTutorial is deleted successfully",
    data: result,
  });
};

export const VideoTutorialControllers = {
  createVideoTutorial,
  getAllVideoTutorial,
  deleteVideoTutorial
};
