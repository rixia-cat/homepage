import dayjs from "@/util/dayjs";
import { CalendarDots, Sparkle } from "@phosphor-icons/react/dist/ssr";
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

export default function ArticleSingleLineList({
  articles,
  andmoreCount,
}: ArticleSingleLineListProps) {
  return (
    <div className="relative w-full rounded-lg border border-gray-400 border-dashed dark:border-gray-700">
      <div className="overflow-y-auto">
        <ul className=" flex max-h-80 flex-col flex-nowrap">
          {articles.map((article) => {
            const publishedAtStr = dayjs(article.publishedAt)
              .tz()
              .format("YYYY/MM/DD HH:mm");
            const updatedAtStr = dayjs(article.updatedAt)
              .tz()
              .format("YYYY/MM/DD HH:mm");
            return (
              <li
                key={article.url}
                className="flex flex-col p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <div className="flex flex-row flex-nowrap items-center justify-start">
                  <Image
                    src={article.leadingImageUrl}
                    alt={`${article.title}のサムネイル`}
                    width={96}
                    height={64}
                    quality={85}
                    className="!relative h-16 max-h-16 min-h-16 w-24 min-w-24 max-w-24 rounded-lg object-cover"
                  />

                  <div className="flex w-full flex-row flex-wrap py-1 pr-2 pl-3">
                    <div className="flex grow flex-col flex-nowrap">
                      {/* タイトル */}
                      <a
                        href={article.url}
                        className="mb-1 line-clamp-2 font-medium text-base text-grayishblack hover:underline dark:text-grayishblack-dark "
                      >
                        {article.title}
                      </a>

                      {/* タグ */}
                      <div className="mt-1 flex flex-nowrap gap-1 overflow-auto pb-1">
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

                    <div className="flex flex-col flex-nowrap justify-center gap-1">
                      {/* 公開日時 */}
                      <p className="flex items-center rounded-full border border-gray-300 px-1.5 py-0.5 text-gray-600 text-xs dark:border-gray-700 dark:text-gray-300">
                        <CalendarDots size="1rem" className="mr-1" />
                        <span className="mr-1">公開:</span>
                        {publishedAtStr}
                      </p>
                      {/* 更新日時 */}
                      <p className="flex items-center rounded-full border border-gray-300 px-1.5 py-0.5 text-gray-600 text-xs dark:border-gray-700 dark:text-gray-300">
                        <Sparkle size="1rem" className="mr-1" />
                        <span className="mr-1">更新:</span>
                        {updatedAtStr}
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
      {/* <div className="absolute top-0 left-0 h-4 w-full rounded-t-lg bg-gradient-to-b from-white to-transparent dark:from-background-dark" />
      <div className="absolute bottom-0 left-0 h-4 w-full rounded-b-lg bg-gradient-to-t from-white to-transparent dark:from-background-dark" /> */}
    </div>
  );
}
