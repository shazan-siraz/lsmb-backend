import { model, Schema } from "mongoose";
import { Article } from "./article.interface";


const ArticleSchema = new Schema<Article>(
  {
    articleImage: { type: String, required: true },
    articleTitle: { type: String, required: true },
    articleContent: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Enable", "Disable"],
      default: "Enable",
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const ArticleModel = model("Article", ArticleSchema);