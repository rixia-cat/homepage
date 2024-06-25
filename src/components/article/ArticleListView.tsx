import { Article } from "@/components/article/type/Article";
import ArticleCard from "./ArticleCard";

type Props = {
    articles: Article[];
}

export default function ArticleListView(props: Props) {

    return (
        <div className="mx-auto  w-full">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-col-4 gap-4">
                    {props.articles.map((article) => (
                        <ArticleCard key={article.url} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );

}
