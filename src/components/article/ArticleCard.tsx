import { CalendarDots, ClockUser } from "@phosphor-icons/react/dist/ssr";
import { Article } from "./type/Article";

type Props = {
    article: Article;
}

export default function ArticleCard(props: Props) {
    return (
        <div className="border rounded-lg border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-800">
            <a href={`${props.article.url}`} className="rounded-t-lg focus:outline-2 focus:outline-gray-500 dark:focus:outline-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                <div className="flex w-full">
                    {/* 見出し用絵文字 */}
                    <div className="flex items-center justify-center w-20 h-20 min-w-20 min-h-20 bg-gray-200 dark:bg-gray-700 rounded-tl-lg ">
                        <span className="text-3xl hover:text-4xl">{props.article.leaderEmoji}</span>
                    </div>
                    {/* タイトル */}
                    <div className="pt-2 px-2 overflow-hidden grow h-full">
                        <h2 className="text-lg font-bold  align-top ">
                            <p className="hover:underline no-underline line-clamp-2">{props.article.title}</p>
                        </h2>
                    </div>
                </div>
                {/* 説明文 */}
                <div className="p-2  border-b  border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-300   line-clamp-2 ">{props.article.shortDescription}</p>
                </div>
            </a>

            {/* 更新日時 */}
            <div className="flex flex-wrap pt-2 pb-1 px-2">
                <p className="flex items-center text-xs py-0.5 px-1 text-gray-600 dark:text-gray-300 rounded-full border-2 border-gray-300 dark:border-gray-700">
                    <CalendarDots size="1rem" className="mr-1" />
                    {props.article.updatedAt}
                </p>

            </div>
            {/* タグ */}
            <div className="flex flex-wrap pb-2 pt-1 px-2 ">
                {props.article.tags.map((tag) => (
                    <a key={tag.url} href={tag.url} className="px-2 py-1  text-xs bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-700">{tag.label}</a>
                ))}
            </div>
        </div>
    );
}