import ArticleImageThumbnail from "@/features/article/components/ArticleImageThumbnail";
import dayjs from "@/util/dayjs";
import { CalendarDots, Sparkle } from "@phosphor-icons/react/dist/ssr";

type Article = {
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
type Props = {
  article: Article;
};

export default function ArticleGridCard(props: Props) {
  const publishedAtStr = dayjs(props.article.publishedAt).tz().format("YYYY/MM/DD HH:mm");
  const updatedAtStr = dayjs(props.article.updatedAt).tz().format("YYYY/MM/DD HH:mm");

  return (
    <div className="flex flex-col rounded-2xl border border-card_border bg-card_background dark:border-card_border-dark dark:bg-card_background-dark">
      <a
        href={`${props.article.url}`}
        className="flex grow flex-col rounded-t-2xl hover:bg-primary/5 focus:outline-2 focus:outline-gray-500 dark:focus:outline-gray-300 dark:hover:bg-primary-dark/5"
      >
        <div className="flex w-full">
          {/* 見出し用画像 */}
          <div className="h-20 max-h-20 min-h-20 w-24 min-w-24 max-w-24 pt-2 pl-2">
            <ArticleImageThumbnail title={props.article.title} leadingImageUrl={props.article.leadingImageUrl} />
          </div>

          {/* タイトル */}
          <div className="h-full grow overflow-hidden px-3 pt-3">
            <h2 className="align-top font-bold text-base text-blueblack dark:text-blueblack-dark">
              <p className="line-clamp-2 no-underline hover:underline">{props.article.title}</p>
            </h2>
          </div>
        </div>
        {/* 説明文 */}
        <div className="grow border-gray-200 border-b p-2 dark:border-gray-700 ">
          <p className="line-clamp-2 text-gray-600 text-sm dark:text-gray-300 ">{props.article.shortDescription}</p>
        </div>
      </a>

      {/* 公開日時 */}
      <div className="flex flex-wrap px-2 pt-2 pb-0.5">
        <p className="flex items-center rounded-xl border border-gray-300 px-1.5 py-0.5 text-gray-600 text-xs dark:border-gray-700 dark:text-gray-300">
          <CalendarDots size="1rem" className="mr-1" />
          <span className="mr-1">公開:</span>
          {publishedAtStr}
        </p>
      </div>
      {/* 更新日時 */}
      <div className="flex flex-wrap px-2 pt-0.5 pb-1">
        <p className="flex items-center rounded-xl border border-gray-300 px-1.5 py-0.5 text-gray-600 text-xs dark:border-gray-700 dark:text-gray-300">
          <Sparkle size="1rem" className="mr-1" />
          <span className="mr-1">更新:</span>
          {updatedAtStr}
        </p>
      </div>
      {/* タグ */}
      <div className="flex flex-nowrap gap-1 overflow-auto px-2 pt-1 pb-2">
        {props.article.tags.map((tag) => (
          <a
            key={tag.url}
            href={tag.url}
            className="rounded-full border border-chip_border bg-chip_background px-2 py-1 text-xs dark:border-chip_border-dark dark:bg-chip_background-dark"
          >
            {tag.label}
          </a>
        ))}
      </div>
    </div>
  );
}
