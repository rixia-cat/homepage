import { CalendarDots, ClockUser } from "@phosphor-icons/react/dist/ssr";
import { Article } from "@/features/article/type/Article";

type Props = {
    article: Article;
}

export default function ArticleCard(props: Props) {
    return (
        <div className="flex flex-col  rounded-lg border border-card_border bg-card_background dark:border-card_border-dark dark:bg-card_background-dark">
            <a href={`${props.article.url}`} className="flex grow flex-col rounded-t-lg hover:bg-gray-100 focus:outline-2 focus:outline-gray-500 dark:hover:bg-gray-900 dark:focus:outline-gray-300">
                <div className="flex w-full">
                    {/* 見出し用絵文字 */}
                    <div className="flex size-20 min-h-20 min-w-20 items-center justify-center rounded-tl-lg bg-gray-200 dark:bg-gray-800 ">
                        <span className="text-3xl hover:text-4xl">{props.article.leaderEmoji}</span>
                    </div>
                    {/* タイトル */}
                    <div className="h-full grow overflow-hidden px-4 pt-3">
                        <h2 className="align-top text-lg  font-bold text-grayishblack dark:text-grayishblack-dark">
                            <p className="line-clamp-2 no-underline hover:underline">{props.article.title}</p>
                        </h2>
                    </div>
                </div>
                {/* 説明文 */}
                <div className="grow border-b  border-gray-200  p-2 dark:border-gray-700 ">
                    <p className="line-clamp-2 text-sm text-gray-600   dark:text-gray-300 ">{props.article.shortDescription}</p>
                </div>
            </a>

            {/* 更新日時 */}
            <div className="flex flex-wrap px-2 pb-1 pt-2">
                <p className="flex items-center rounded-full border border-gray-300 px-1.5 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300">
                    <CalendarDots size="1rem" className="mr-1" />
                    {props.article.updatedAt}
                </p>

            </div>
            {/* タグ */}
            <div className="flex flex-nowrap overflow-auto px-2 pb-2 pt-1">
                {props.article.tags.map((tag) => (
                    <a key={tag.url} href={tag.url} className="rounded-full border  border-gray-300 bg-gray-100 px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-800">{tag.label}</a>
                ))}
            </div>
        </div>
    );
}