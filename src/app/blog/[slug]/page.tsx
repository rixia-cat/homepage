import { articleMDXComponents } from "@/app/mdx-components";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ProfileCard from "@/features/profile/components/ProfileCard";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const components = articleMDXComponents({});
const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const leadingEmoji = "📖";
  const dummyMarkdownText =
    `
    ## 見出し2
    ` +
    "本文1、改行します。  " +
    `
    あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。

    本文2
    ### 見出し3
    本文3
    #### 見出し4
    本文4
    ##### 見出し5
    本文5
    ###### 見出し6
    本文6

    **太字** *斜体* ~~打消し~~

    ---

    てすと

    てすと２

    - リスト1
    - リスト2
    - リスト3

    1. 番号付きリスト1
    1. 番号付きリスト2


    > 引用

    ## Table

    | Header 1 | Header 2 | Header 3 |
    | -------- | -------- | -------- |
    | Cell 1   | Cell 2   | Cell 3   |
    | Cell 4   | Cell 5   | Cell 6   |


        `;

  return (
    <div className="mx-auto flex max-w-screen-lg grow  justify-center">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
          <h1 className="text-2xl font-bold mb-4">Side</h1>
      </aside> */}

      <main className="mx-6 max-w-screen-md grow p-6">
        <div className=" mb-8 rounded-xl border-2 border-gray-300 dark:border-gray-700">
          <div className="mb-6 mt-2 flex justify-center">
            <span className="text-5xl text-gray-500 dark:text-gray-400">
              {leadingEmoji}
            </span>
          </div>
          <h1 className="mb-6 text-center text-3xl font-bold text-grayishblack dark:text-grayishblack-dark ">
            記事タイトル
          </h1>
        </div>
        <MDXRemote
          source={dummyMarkdownText}
          components={components}
          options={options}
        />
      </main>
      <aside className=" mt-40  hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>
    </div>
  );
}
