import RecentArticleSingleLineListView from "@/features/article/recent-list/components/RecentArticleSingleLineListView";
import NeofetchLikeProfile from "@/features/profile/components/NeofetchLikeProfile";
import { nunito } from "@/util/font";
import { Book, CaretCircleDoubleRight } from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60 * 60 * 24 * 7;

const leadingPrefixText = "I'm ";
const leadingNameText = "rixia";
const leadingSuffixText = ".";
export default function Home() {
  return (
    <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
      <main className="max-w-full grow overflow-hidden p-4 md:max-w-screen-md">
        <h1 className={`mt-2 tracking-widest ${nunito.className}`}>
          <span className="text-5xl text-gray-500/75 dark:text-gray-400/75">{leadingPrefixText}</span>
          <span className="font-semibold text-5xl text-primary tracking-wider dark:text-primary-dark">
            {leadingNameText}
          </span>
          <span className="text-5xl text-gray-500/75 dark:text-gray-400/75">{leadingSuffixText}</span>
        </h1>

        <section className="mt-6">
          <NeofetchLikeProfile />

          <div className="mt-3 flex flex-row justify-start pr-0.5">
            <a
              href="/about"
              className="flex flex-row items-start rounded-xl border border-primary px-3 py-1.5 font-medium text-base text-primary transition-all duration-500 hover:bg-primary/10 hover:underline dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark/15"
            >
              <span className="mr-3">
                <CaretCircleDoubleRight size="1.7rem" />
              </span>
              <span>詳しいプロフィールへ</span>
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="flex items-center justify-between ">
            <div className="flex flex-nowrap items-center">
              <Book size="2.75rem" className="mr-2 text-blueblack dark:text-blueblack-dark" />
              <span className="text-3xl text-blueblack dark:text-blueblack-dark">blog</span>
            </div>

            <a
              href="/blog"
              className="flex flex-row items-start rounded-xl border border-primary px-2 py-1.5 font-medium text-base text-primary transition-all duration-500 hover:bg-primary/10 hover:underline dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark/15"
            >
              <span className="mr-3">
                <CaretCircleDoubleRight size="1.7rem" />
              </span>
              <span className="">記事一覧へ</span>
            </a>
          </h2>

          <div className="mt-3 flex max-h-96 overflow-hidden rounded-2xl border border-gray-400 border-dashed dark:border-gray-700">
            <RecentArticleSingleLineListView />
          </div>
        </section>
      </main>
    </div>
  );
}
