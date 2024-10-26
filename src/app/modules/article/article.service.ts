import { Article } from "./article.interface";
import { ArticleModel } from "./article.model";

const createArticleIntoDB = async (articleData: Article) => {
  const result = await ArticleModel.create(articleData);
  return result;
};

const getAllArticleFromDB = async () => {
  const result = await ArticleModel.find({ isDeleted: { $ne: true } });
  return result;
};

const getSingleArticleFromDB = async (id: string) => {
  const result = await ArticleModel.findById({ _id: id });
  return result;
};

const deleteArticleFromDB = async (id: string) => {
  const result = await ArticleModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

export const ArticleServices = {
  createArticleIntoDB,
  getAllArticleFromDB,
  getSingleArticleFromDB,
  deleteArticleFromDB,
};

