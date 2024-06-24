import { ArticleTag } from "./Tag";

export type Article = {
    slag: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tags: ArticleTag[],
}