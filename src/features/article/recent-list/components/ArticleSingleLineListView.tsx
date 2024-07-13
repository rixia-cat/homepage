import ArticleImageThumbnail from "@/features/article/components/ArticleImageThumbnail";
import dayjs from "@/util/dayjs";
import { CalendarDots, Sparkle } from "@phosphor-icons/react/dist/ssr";

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
    <div className="max-h-full w-full overflow-y-auto ">
      <ul className="flex flex-col flex-nowrap">
        {articles.map((article) => {
          const publishedAtStr = dayjs(article.publishedAt).tz().format("YYYY/MM/DD");
          const updatedAtStr = dayjs(article.updatedAt).tz().format("YYYY/MM/DD");
          return (
            <li key={article.url} className="flex flex-col p-2 hover:bg-gray-200 dark:hover:bg-gray-800">
              <div className="flex flex-row flex-nowrap items-center justify-start">
                <div className="h-16 max-h-16 min-h-16 w-24 min-w-24 max-w-24">
                  <ArticleImageThumbnail title={article.title} leadingImageUrl={article.leadingImageUrl} />
                </div>

                <div className="flex grow flex-wrap py-1 pr-2 pl-3 sm:flex-row sm:flex-nowrap">
                  <div className="flex w-full flex-col flex-nowrap ">
                    {/* タイトル */}
                    <a
                      href={article.url}
                      className="mb-1 line-clamp-2 font-medium text-base text-grayishblack hover:underline dark:text-grayishblack-dark "
                    >
                      {article.title}
                    </a>

                    {/* タグ */}
                    <div className="my-1 flex flex-nowrap gap-1 overflow-auto">
                      {article.tags.map((tag) => (
                        <a
                          key={tag.url}
                          href={tag.url}
                          className="rounded-full border border-gray-300 bg-gray-100 px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-800"
                        >
                          {tag.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col flex-nowrap justify-center gap-1">
                    {/* 公開日時 */}
                    <p className="flex h-6 items-center rounded-full border border-gray-300 px-1.5 text-gray-600 text-xs dark:border-gray-700 dark:text-gray-300">
                      <CalendarDots size="1.2rem" className="mr-1" />
                      <span className="align-middle">公開: {publishedAtStr}</span>
                    </p>
                    {/* 更新日時 */}
                    <p className="flex h-6 items-center rounded-full border border-gray-300 px-1.5 text-gray-600 text-xs dark:border-gray-700 dark:text-gray-300">
                      <Sparkle size="1.2rem" className="mr-1" />
                      <span className="align-middle">更新: {updatedAtStr}</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
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
  );
}
