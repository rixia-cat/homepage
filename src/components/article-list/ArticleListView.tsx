import { Article } from "@/types/Article";

type Props = {
    articles: Article[];
}

export default function ArticleListView(props: Props) {
    return props.articles.map((article, index) => (
        <div key={index} className="p-4" >
            {article.content}
        </div>
    ));
}
