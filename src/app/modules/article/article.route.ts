import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { ArticleControllers } from "./article.controller";

const router = express.Router();

router.post(
  "/create-article",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ArticleControllers.createArticle
);

router.get(
  "/",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ArticleControllers.getAllArticle
);

router.get(
  "/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ArticleControllers.getSingleArticle
);

router.delete(
  "/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ArticleControllers.deleteArticle
);

export const ArticleRoutes = router;
