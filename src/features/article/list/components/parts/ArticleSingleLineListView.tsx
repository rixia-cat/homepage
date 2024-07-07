import Image from "next/image";

export type Article = {
  leadingImageUrl: string;
  title: string;
  shortDescription: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  tags: {
    label: string;
    url: string;
  }[];
};
type ArticleSingleLineListProps = {
  articles: Article[];
  andmoreCount: number;
};

export default function ArticleSingleLineList({ articles, andmoreCount }: ArticleSingleLineListProps) {
  return (
    <div className="relative w-full rounded-lg border border-gray-400 border-dashed dark:border-gray-700">
      <div className="overflow-y-auto p-4">
        <ul className=" flex max-h-80 flex-col flex-nowrap">
          {articles.map((article) => (
            <li key={article.url} className="flex flex-col py-2 ">
              <div className="flex flex-row items-center justify-start">
                <Image
                  src={article.leadingImageUrl}
                  alt={article.title}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />

                <div className="flex w-full flex-col flex-nowrap">
                  <a
                    href={article.url}
                    className="line-clamp-1 font-medium text-base text-grayishblack hover:underline dark:text-grayishblack-dark "
                  >
                    {article.title}
                  </a>
                </div>
              </div>
            </li>
          ))}
          {andmoreCount >= 10 && (
            <li className="flex flex-row items-center justify-start py-2">
              <a href="/blog" className="hover:underline ">
                <span className="font-medium text-base text-gray-500 dark:text-gray-400">
                  ... {andmoreCount} more articles.
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="absolute top-0 left-0 h-4 w-full rounded-t-lg bg-gradient-to-b from-white to-transparent dark:from-background-dark" />
      <div className="absolute bottom-0 left-0 h-4 w-full rounded-b-lg bg-gradient-to-t from-white to-transparent dark:from-background-dark" />
    </div>
  );
}
