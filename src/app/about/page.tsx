import RixiaProfImg from "@/assets/rixia.svg?url";
import LabelChip from "@/components/chip/LabelChip";
import { likesArtists } from "@/features/profile/consts/profile";
import {
  backendFrameworks,
  backendLanguages,
  frontendFrameworks,
  frontendLanguages,
  mobileFrameworks,
  mobileLanguages,
} from "@/features/profile/consts/skills";
import { Urbanist } from "next/font/google";
import Image from "next/image";
const logoFont = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export default async function About() {
  return (
    <div className="mx-auto flex max-w-screen-lg grow justify-center">
      <main className="flex max-w-screen-sm grow flex-col overflow-hidden p-4">
        {/* Title */}
        <div className="flex w-full flex-col flex-nowrap items-center justify-center">
          <h1 className={logoFont.className}>
            <div className="flex w-full flex-row justify-center gap-x-1 p-2 text-center text-4xl tracking-widest">
              <span className="rounded-md border border-gray-800 bg-gray-600 px-4 py-2 text-white dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                ABOUT
              </span>
              <span className="rounded-md border border-gray-400 bg-white px-4 py-2 font-bold text-gray-600 dark:border-gray-400 dark:bg-gray-400 dark:text-gray-800">
                ME
              </span>
            </div>
          </h1>

          <div className="mt-4 w-full border-gray-300 border-b dark:border-gray-600" />
        </div>

        <section className="mt-10">
          <h2 className="mb-6 flex w-full flex-row flex-nowrap items-start">
            <div className="-skew-x-12 mr-2.5 ml-1 h-7 border-grayishblack border-x-2 px-[2px] dark:border-grayishblack-dark" />
            <span className="font-bold text-2xl text-grayishblack dark:text-grayishblack-dark">このサイトについて</span>
          </h2>
          <div className="flex flex-col gap-y-2 leading-6">
            <p>
              試した技術やTipsなどプログラミング寄りのことから日常的な雑記まで、ごった煮で書いていきたいと思います。
            </p>
            <p>
              ポートフォリオ・サンドボックスも兼ねており、デザインやUI/UXの改善にも挑戦していくような場にしたいです。
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-2 flex w-full flex-row flex-nowrap items-start">
            <div className="-skew-x-12 mr-2.5 ml-1 h-7 border-grayishblack border-x-2 px-[2px] dark:border-grayishblack-dark" />
            <span className="font-bold text-2xl text-grayishblack dark:text-grayishblack-dark">「rixia」について</span>
          </h2>

          <div className="mb-2 flex flex-col items-center">
            <div className="flex size-36 flex-col items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
              <Image src={RixiaProfImg} alt="プロフィール画像" width={90} height={90} className="" />
            </div>
          </div>

          <h3 className="mb-2 font-bold text-grayishblack text-xl dark:text-grayishblack-dark">プロフィール</h3>
          <div className=" mt-4 flex flex-col gap-y-2 leading-6">
            <p>rixia (りーしゃ）です。</p>
            <p>
              フロントエンド・モバイルアプリが好き・得意なエンジニアです。仕事上はTypeScript、Vue.js、PHP（Laravel)を使用した開発が多いです。
            </p>
            <p>
              アプリ系は興味・個人開発で触っており、FlutterやCompose
              Multiplatformなどクロスプラットフォーム系を中心としています。
            </p>
          </div>

          <h3 className="mt-6 mb-2 font-bold text-grayishblack text-xl dark:text-grayishblack-dark">スキル</h3>

          <h4 className="mt-4 mb-2 font-bold text-base text-grayishblack dark:text-grayishblack-dark">
            フロントエンド
          </h4>
          <div className="flex flex-row flex-wrap gap-x-1 gap-y-2">
            {[...frontendLanguages, ...frontendFrameworks].map((skill) => {
              return <LabelChip key={skill} label={skill} />;
            })}
          </div>

          <h4 className="mt-4 mb-2 font-bold text-base text-grayishblack dark:text-grayishblack-dark">バックエンド</h4>
          <div className="flex flex-row flex-wrap gap-x-1 gap-y-2">
            {[...backendLanguages, ...backendFrameworks].map((skill) => {
              return <LabelChip key={skill} label={skill} />;
            })}
          </div>
          <h4 className="mt-4 mb-2 font-bold text-base text-grayishblack dark:text-grayishblack-dark">モバイル</h4>
          <div className="flex flex-row flex-wrap gap-x-1 gap-y-2">
            {[...mobileLanguages, ...mobileFrameworks].map((skill) => {
              return <LabelChip key={skill} label={skill} />;
            })}
          </div>

          <h3 className="mt-6 mb-2 font-bold text-grayishblack text-xl dark:text-grayishblack-dark">趣味</h3>

          <h4 className="mt-4 mb-2 font-bold text-base text-grayishblack dark:text-grayishblack-dark">
            好きな音楽アーティスト/グループ等
          </h4>
          <div className="flex flex-row flex-wrap gap-x-1 gap-y-2">
            {likesArtists.map((artist) => {
              return <LabelChip key={artist} label={artist} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
