import { interests, leadingJobDescription, name, profileLinks } from "@/features/profile/consts/profile";
import { CaretCircleDoubleRight, UserCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type ProfileCardProps = {
  isCompact?: boolean;
};

export default async function ProfileCard({ isCompact = false }: ProfileCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-card_border bg-card_background p-3 dark:border-card_border-dark dark:bg-card_background-dark">
      <div className="mb-3 flex w-full flex-row flex-nowrap items-center border-primary/35 border-b border-dashed pb-2 align-middle dark:border-primary-dark/35">
        <a href="/about" className=" flex flex-row flex-nowrap items-center ">
          <UserCircle className="mr-1.5" size="1.75rem" />
          <p className="line-clamp-2 font-bold text-blueblack text-lg no-underline hover:underline dark:text-blueblack-dark">
            プロフィール
          </p>
        </a>
      </div>
      <div className="">
        <div className="flex flex-col items-center">
          <div className="flex h-24 flex-col items-center justify-center rounded-full bg-gray-200 p-4 dark:bg-gray-800">
            <Image
              src="/image/profile/rixia.svg"
              alt="rixiaのプロフィール画像"
              width={90}
              height={90}
              priority={true}
              loading="eager"
              className="h-full w-auto "
            />
          </div>
        </div>
        <p className="mb-2 text-start font-bold text-blueblack text-xl dark:text-blueblack-dark">{name}</p>
        <p className="text-start text-gray-500 text-sm dark:text-gray-300">{leadingJobDescription}</p>

        {isCompact === false && (
          <>
            <div className="mt-3 flex flex-row flex-wrap gap-2">
              {profileLinks.map((link) => {
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    title={link.title}
                    className="flex flex-row flex-nowrap items-center rounded-full border border-gray-400 p-1.5 hover:bg-primary/5 dark:border-gray-600 dark:hover:bg-primary-dark/15"
                    rel="noreferrer"
                  >
                    <link.icon size="1.75rem" className="text-gray-500 " />
                  </a>
                );
              })}
            </div>
            <div className="my-3 h-[1px] w-full bg-primary/15 dark:bg-primary-dark/25" />

            <div className="flex flex-col">
              <p className="mb-2 font-bold text-gray-500 text-sm dark:text-gray-400">好き・興味のある分野</p>
              <div className=" flex flex-row flex-wrap items-center gap-1">
                {interests.map((interestItem) => {
                  return (
                    <div
                      key={interestItem}
                      className="flex h-6 items-center rounded-full border border-chip_border bg-chip_background px-1.5 dark:border-chip_border-dark dark:bg-card_background-dark"
                    >
                      <span className=" text-blueblack text-xs dark:text-blueblack-dark"> {interestItem}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <div className="my-3 h-[1px] w-full bg-primary/15 dark:bg-primary-dark/25" />

        <div className="flex flex-row flex-wrap ">
          <a
            href="/about"
            className="flex flex-row flex-nowrap items-start rounded-md border border-gray-400 px-2 py-1 hover:bg-primary/5 dark:border-gray-600 dark:hover:bg-primary-dark/15"
          >
            <CaretCircleDoubleRight size="1.4rem" className="mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 text-sm hover:underline dark:text-gray-400">詳しく見る</span>
          </a>
        </div>
      </div>
    </div>
  );
}
