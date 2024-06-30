import NeofetchLikeProfile from "@/components/profile/NeofetchLikeProfile";
import { Book, CaretCircleDoubleRight } from "@phosphor-icons/react/dist/ssr";

const leadingPrefixText = "I'm ";
const leadingNameText = "rixia.";
export default function Home() {
  return (
    <div className="mx-auto flex max-w-screen-lg grow justify-center">

      <main className="max-w-screen-md grow overflow-hidden p-4">
        <h1  >
          <span className="text-5xl text-gray-500 dark:text-gray-400">{leadingPrefixText}</span>
          <span className="text-5xl text-grayishblack dark:text-grayishblack-dark">{leadingNameText}</span>
        </h1>

        <div className="mt-6  ">
          <NeofetchLikeProfile />
        </div>

        <div className="mt-2 flex flex-row justify-start pr-0.5">
          <a href="/about" className="flex  rounded-lg border border-gray-600 px-3 py-1.5 text-base font-medium text-grayishblack dark:border-gray-500 dark:text-grayishblack-dark" >
            <span className="mr-3"><CaretCircleDoubleRight size="1.5rem" /></span>
            <span>See more about me</span>
          </a>
        </div>

        <h2 className="mt-8 flex items-center justify-between border-b-2 border-dashed border-gray-300  pb-2  dark:border-gray-700 " >
          <div className="flex flex-nowrap items-center">
            <Book size="2.75rem" className="mr-2 text-grayishblack dark:text-grayishblack-dark" />
            <span className="text-3xl  text-grayishblack dark:text-grayishblack-dark">Blog</span>
          </div>

          <a href="/about" className="flex  rounded-lg border border-gray-600 px-3 py-1.5 text-base font-medium text-grayishblack dark:border-gray-500 dark:text-grayishblack-dark" >
            <span className="mr-3"><CaretCircleDoubleRight size="1.5rem" /></span>
            <span>See more</span>
          </a>
        </h2>

      </main >

    </div >
  );
}
