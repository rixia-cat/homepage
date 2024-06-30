import ArticleSingleLineListView from "@/features/article/list/components/parts/ArticleSingleLineListView";
import { dummyArticles } from "../../dummy-data/articleDummyData";

export default async function RecentArticleSingleLineListView() {
    return (
        <ArticleSingleLineListView articles={dummyArticles} andmoreCount={10} />
    )
}