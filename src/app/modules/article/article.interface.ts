export type Article = {
    articleImage: string;
    articleTitle: string;
    articleContent: string;
    status: "Enable" | "Disable";
    isDeleted: boolean;
  };
  