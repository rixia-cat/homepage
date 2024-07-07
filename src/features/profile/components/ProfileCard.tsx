import { interests, leadingJobDescription, profileLinks } from "@/features/profile/consts/profile";
import { CaretCircleDoubleRight, UserCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function ProfileCard() {
  return (
    <div className="flex flex-col rounded-lg border border-card_border bg-card_background p-3 dark:border-card_border-dark dark:bg-card_background-dark">
      <a
        href="/about"
        className="mb-4 flex flex-row flex-nowrap items-center border-gray-400 border-b border-dashed pb-2 align-middle dark:border-gray-500"
      >
        <UserCircle className="mr-1.5" size="2rem" />
        <p className="font-bold text-lg no-underline hover:underline">Profile</p>
      </a>
      <div className="mb-2 ">
        <div className="flex flex-col items-center">
          <div className="flex size-36 flex-col items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
            <Image src="/image/profile/rixia.svg" alt="rixiaのプロフィール画像" width={90} height={90} />
          </div>
        </div>
        <p className="mb-2 text-start font-bold text-grayishblack text-xl dark:text-grayishblack-dark">rixia</p>
        <p className="text-start text-gray-500 text-sm dark:text-gray-300">{leadingJobDescription}</p>

        <div className="mt-3 flex flex-row flex-wrap gap-2">
          {profileLinks.map((link) => {
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                title={link.title}
                className="flex flex-row flex-nowrap items-center rounded-full border border-gray-400 p-1.5 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800"
                rel="noreferrer"
              >
                <link.icon size="1.75rem" className="text-gray-500 dark:text-gray-400" />
              </a>
            );
          })}
        </div>

        <div className="my-4 h-[1px] w-full bg-gray-300 dark:bg-gray-600" />

        <div className="flex flex-col">
          <p className="mb-2 font-bold text-gray-500 text-sm dark:text-gray-400">好き・興味のある分野</p>
          <div className=" flex flex-row flex-wrap gap-1">
            {interests.map((interestItem) => {
              return (
                <span
                  key={interestItem}
                  className="rounded-full border border-gray-400 px-1.5 py-0.5 text-grayishblack text-xs dark:border-gray-600 dark:text-grayishblack-dark"
                >
                  {interestItem}
                </span>
              );
            })}
          </div>
        </div>

        <div className="my-4 h-[1px] w-full bg-gray-300 dark:bg-gray-600" />

        <div className="mt-4 flex flex-row flex-wrap ">
          <a
            href="/about"
            className="flex flex-row flex-nowrap items-center rounded-lg border border-gray-400 p-1 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            <CaretCircleDoubleRight size="1.25rem" className="mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 text-sm hover:underline dark:text-gray-400">詳しく見る</span>
          </a>
        </div>
      </div>
    </div>
  );
}
