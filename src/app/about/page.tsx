import LabelChip from "@/components/chip/LabelChip";
import { interests, likeGames, likesArtists } from "@/features/profile/consts/profile";
import {
  backendDatabases,
  backendFrameworks,
  backendLanguages,
  certifications,
  frontendFrameworks,
  frontendLanguages,
  mobileFrameworks,
  mobileLanguages,
  otherSkils,
} from "@/features/profile/consts/skills";
import { urbanist } from "@/util/font";
import {
  Certificate,
  Code,
  Desktop,
  DeviceMobileSpeaker,
  GameController,
  HardDrives,
  ListStar,
  MusicNote,
  ShootingStar,
  Toolbox,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export async function generateMetadata({}, parent: ResolvingMetadata): Promise<Metadata> {
  const parentMetadata = await parent;
  return {
    title: "about - rixia.dev",
    description: "プロフィール・スキル・サイトについて",
    openGraph: {
      ...parentMetadata.openGraph,
      title: "about - rixia.dev",
      description: "プロフィール・スキル・サイトについて",
      type: "website",
      url: "https://rixia.dev/about",
    },
  };
}

export default function About() {
  return (
    <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
      <main className="flex max-w-full grow flex-col overflow-hidden p-4 sm:max-w-screen-sm">
        {/* Title */}
        <div className="flex w-full flex-col flex-nowrap items-center justify-center">
          <h1 className={urbanist.className}>
            <div className="flex w-full flex-row justify-center gap-x-1 p-2 text-center font-semibold text-4xl tracking-widest">
              <span className="rounded-md border border-gray-800 bg-primary px-4 py-2 text-white dark:border-card_border-dark dark:bg-primary-dark/30 dark:text-gray-300">
                ABOUT
              </span>
              <span className="rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-600 dark:border-gray-700 dark:bg-gray-800/75 dark:text-gray-300/80">
                ME
              </span>
            </div>
          </h1>

          <div className="mt-4 w-full border-card_border border-b bg-card_background dark:border-card_border-dark dark:bg-card_background-dark" />
        </div>

        <section className="mt-10">
          <h2 className="mb-6 flex w-full flex-row flex-nowrap items-center">
            <div className="-skew-x-12 mr-4 ml-1 h-10 border-blueblack border-x-2 px-[2px] dark:border-blueblack-dark" />
            <span className="font-bold text-2xl text-blueblack dark:text-blueblack-dark">このサイトについて</span>
          </h2>
          <div className="flex flex-col gap-y-2 leading-7">
            <p>
              試した技術やTipsなどプログラミング寄りのことから日常的な雑記まで、ごった煮で書いていきたいと思います。
            </p>
            <p>
              ポートフォリオ・サンドボックスも兼ねており、デザインやUI/UXの改善にも挑戦していくような場にしたいです。
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-4 flex w-full flex-row flex-nowrap items-center">
            <div className="-skew-x-12 mr-4 ml-1 h-10 border-blueblack border-x-2 px-[2px] dark:border-blueblack-dark" />
            <span className="font-bold text-2xl text-blueblack dark:text-blueblack-dark">rixia について</span>
          </h2>

          <div className="mb-2 flex flex-col items-center">
            <div className="flex h-36 flex-col items-center justify-center rounded-full bg-gray-300/55 p-6 dark:bg-gray-800">
              <Image
                src="/image/profile/rixia.svg"
                alt="プロフィール画像"
                width={96}
                height={101}
                priority={true}
                loading="eager"
                className="h-full w-auto "
              />
            </div>
          </div>

          <h3 className="mb-3 flex flex-row flex-nowrap items-center text-blueblack dark:text-blueblack-dark">
            <UserCircle size="2.75rem" className="mr-2.5" />
            <span className="font-bold text-xl">プロフィール</span>
          </h3>
          <div className="mt-4 flex flex-col gap-y-2 rounded-xl border border-card_border bg-card_background px-4 py-6 text-base leading-7 dark:border-card_border-dark dark:bg-card_background-dark">
            <p>rixia (りーしゃ）です。</p>
            <p>
              フロントエンド・モバイルアプリが好き・得意なエンジニアです。仕事上はTypeScript、Vue.js、PHP（Laravel)を使用した開発が多いです。
            </p>
            <p>興味関心はフロント寄りですが、フルスタック的に開発を担っています。</p>
            <p>
              アプリ系は興味・個人開発で触っており、FlutterやCompose
              Multiplatformなどクロスプラットフォーム系を中心に、身内向けのアプリや自分用のツール系アプリなどを作成しています。
            </p>
          </div>

          <h3 className="mt-8 mb-3 flex flex-row flex-nowrap items-center text-blueblack dark:text-blueblack-dark">
            <Code size="2.75rem" className="mr-2.5" />
            <span className="font-bold text-xl">スキル</span>
          </h3>

          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <Desktop size="2rem" className="mr-2" />
              <span className="font-bold text-base">フロントエンド</span>
            </h4>
            <div className="px-1">
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">言語</h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {frontendLanguages.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">
                フレームワーク
              </h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {frontendFrameworks.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <HardDrives size="2rem" className="mr-2" />
              <span className="font-bold text-base">バックエンド</span>
            </h4>
            <div className="px-1">
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">言語</h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {backendLanguages.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">
                フレームワーク
              </h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {backendFrameworks.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">DB</h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {backendDatabases.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <DeviceMobileSpeaker size="2rem" className="mr-2" />
              <span className="font-bold text-base">モバイル</span>
            </h4>
            <div className="px-1">
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">言語</h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {mobileLanguages.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
              <h5 className="mt-2 mb-1 font-semibold text-blueblack text-sm dark:text-blueblack-dark">
                フレームワーク
              </h5>
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {mobileFrameworks.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <Certificate size="2rem" className="mr-2" />
              <span className="font-bold text-base">資格</span>
            </h4>
            <div className="mt-2 px-1">
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {certifications.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <Toolbox size="2rem" className="mr-2" />
              <span className="font-bold text-base">その他</span>
            </h4>
            <div className="mt-2 px-1">
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {otherSkils.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <h3 className="mt-8 mb-3 flex flex-row flex-nowrap items-center text-blueblack dark:text-blueblack-dark">
            <ShootingStar size="2.75rem" className="mr-4" />
            <span className="font-bold text-xl">好き・興味のある分野</span>
          </h3>
          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <ListStar size="2.25rem" className="mr-2" />
              <span className="font-bold text-lg">一覧</span>
            </h4>
            <div className="mt-2 px-1">
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {interests.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <GameController size="2rem" className="mr-2" />
              <span className="font-bold text-base">ゲーム</span>
            </h4>
            <div className="mt-2 px-1">
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {likeGames.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-2 flex flex-col rounded-xl border border-card_border bg-card_background p-2 dark:border-card_border-dark dark:bg-card_background-dark">
            <h4 className="mb-1 flex flex-row items-center text-blueblack dark:text-blueblack-dark">
              <MusicNote size="2rem" className="mr-2" />
              <span className="font-bold text-base">音楽アーティスト/グループ等 (敬称略)</span>
            </h4>
            <div className="mt-2 px-1">
              <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-1 py-2">
                {likesArtists.map((item) => {
                  return <LabelChip key={item} label={item} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
