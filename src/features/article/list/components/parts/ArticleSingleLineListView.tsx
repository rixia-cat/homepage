import { Article } from "@/features/article/type/Article";

type Props = {
    articles: Article[];
    andmoreCount: number;
}

export default function ArticleSingleLineList({ articles, andmoreCount }: Props) {
    return (
        <div className="relative  w-full rounded-lg border  border-dashed border-gray-400 dark:border-gray-700">
            <div className="overflow-y-auto  ">
                <ul className="m-2 flex max-h-80 flex-col flex-nowrap p-1">
                    {articles.map((article) => (
                        <li key={article.url} className="flex flex-row items-center justify-start py-2">
                            <a href={article.url} className="line-clamp-1 text-base font-medium text-grayishblack hover:underline dark:text-grayishblack-dark">
                                {article.title}
                            </a>
                        </li>
                    ))}
                    {andmoreCount > 0 && (
                        <li className="flex flex-row items-center justify-start py-2">
                            <a href="/blog" className="hover:underline ">
                                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                                    and {andmoreCount} articles more...
                                </span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <div className="absolute left-0 top-0 h-4 w-full rounded-t-lg bg-gradient-to-b from-white to-transparent dark:from-background-dark"></div>
            <div className="absolute bottom-0 left-0 h-4 w-full rounded-b-lg bg-gradient-to-t from-white to-transparent dark:from-background-dark"></div>
        </div>
    );
}