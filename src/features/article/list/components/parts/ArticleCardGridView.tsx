import ArticleCard from "@/features/article/list/components/parts/ArticleCard";
import type { ComponentProps } from "react";

type ArticleCardGridViewProps = {
  articles: ComponentProps<typeof ArticleCard>["article"][];
};

export default function ArticleListView(props: ArticleCardGridViewProps) {
  return (
    <div className="mx-auto w-full">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {props.articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
