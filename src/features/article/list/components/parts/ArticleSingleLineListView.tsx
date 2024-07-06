import Image from 'next/image';

export type Article = {
    leadingImageUrl: string;
    title: string;
    shortDescription: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    tags: {
        label: string;
        url: string;
    }[];
  }
type ArticleSingleLineListProps = {
    articles: Article[];
    andmoreCount: number;
}

export default function ArticleSingleLineList({ articles, andmoreCount }: ArticleSingleLineListProps) {
    return (
        <div className="relative  w-full rounded-lg border  border-dashed border-gray-400 dark:border-gray-700">
            <div className="overflow-y-auto p-4">
                <ul className=" flex max-h-80 flex-col flex-nowrap">
                    {articles.map((article) => (
                        <li key={article.url} className="flex flex-col   py-2 ">
                            <div className="flex flex-row items-center justify-start">
                                <Image src={article.leadingImageUrl} alt={article.title} width={40} height={40} className="rounded-lg" />

                                <div className="flex w-full flex-col flex-nowrap">
                                    <a href={article.url} className="line-clamp-1 text-base font-medium text-grayishblack hover:underline dark:text-grayishblack-dark ">
                                        {article.title}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                    {andmoreCount >= 10 && (
                        <li className="flex flex-row items-center justify-start py-2">
                            <a href="/blog" className="hover:underline ">
                                <span className="text-base  font-medium text-gray-500 dark:text-gray-400">
                                    ... {andmoreCount} more articles.
                                </span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <div className="absolute left-0 top-0 h-4 w-full rounded-t-lg bg-gradient-to-b from-white to-transparent dark:from-background-dark"></div>
            <div className="absolute bottom-0 left-0 h-4 w-full rounded-b-lg bg-gradient-to-t from-white to-transparent dark:from-background-dark"></div>
        </div >
    );
}