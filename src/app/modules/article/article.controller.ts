import { NextFunction, Request, Response } from "express";
import { ArticleServices } from "./article.service";

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ArticleServices.createArticleIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Article is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllArticle = async (req: Request, res: Response) => {
  const result = await ArticleServices.getAllArticleFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Article are retrieve successfully",
    data: result,
  });
};

const getSingleArticle = async (req: Request, res: Response) => {
  const result = await ArticleServices.getSingleArticleFromDB(req.params.id);

  // send response
  res.status(200).json({
    success: true,
    message: "Article is retrieve successfully",
    data: result,
  });
};

const deleteArticle = async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ArticleServices.deleteArticleFromDB(id);

  // send response
  res.status(200).json({
    success: true,
    message: "Article is deleted successfully",
    data: result,
  });
};

export const ArticleControllers = {
  createArticle,
  getAllArticle,
  getSingleArticle,
  deleteArticle,
};
