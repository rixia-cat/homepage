import NeofetchLikeProfile from "@/components/profile/NeofetchLikeProfile";
import RecentArticleSingleLineListView from "@/features/article/list/components/RecentArticleSingleLineListView";
import { Book, CaretCircleDoubleRight } from "@phosphor-icons/react/dist/ssr";


const leadingPrefixText = "I'm ";
const leadingNameText = "rixia";
const leadingSuffixText = ".";
export default function Home() {
  return (
    <div className="mx-auto flex max-w-screen-lg grow justify-center">

      <main className="max-w-screen-md grow overflow-hidden p-4">
        <h1 className="mt-2" >
          <span className="text-5xl text-gray-500 dark:text-gray-400">{leadingPrefixText}</span>
          <span className="text-5xl text-grayishblack dark:text-grayishblack-dark">{leadingNameText}</span>
          <span className="text-5xl text-gray-500 dark:text-gray-400">{leadingSuffixText}</span>
        </h1>

        <section className="mt-6">
          <NeofetchLikeProfile />

          <div className="mt-3 flex flex-row justify-start pr-0.5">
            <a href="/about" className="flex  rounded-lg border border-gray-600 px-3 py-1.5 text-base font-medium text-grayishblack dark:border-gray-500 dark:text-grayishblack-dark" >
              <span className="mr-3"><CaretCircleDoubleRight size="1.5rem" /></span>
              <span>See more about me</span>
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="flex items-center justify-between " >
            <div className="flex flex-nowrap items-center">
              <Book size="2.75rem" className="mr-2 text-grayishblack dark:text-grayishblack-dark" />
              <span className="text-3xl  text-grayishblack dark:text-grayishblack-dark">Blog</span>
            </div>

            <a href="/blog" className="flex  rounded-lg border border-gray-600 px-2 py-1.5  text-base font-medium text-grayishblack dark:border-gray-500 dark:text-grayishblack-dark sm:px-3" >
              <span className="sm:mr-3"><CaretCircleDoubleRight size="1.5rem" /></span>
              <span className="hidden sm:flex">See more</span>
            </a>
          </h2>

          <div className="mt-3">
            <RecentArticleSingleLineListView />
          </div>
        </section>

      </main >

    </div >
  );
}
