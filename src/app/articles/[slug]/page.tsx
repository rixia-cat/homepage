import { articleMDXComponents } from "@/app/mdx-components";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const components = articleMDXComponents({});
const options: MDXRemoteProps["options"] = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
    },
};

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const dummyMarkdownText = `
    ## 見出し2
    ` +
        "本文1、改行します。  "
        +
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


    return <div className="mx-auto max-w-screen-md grow p-4">
        <div className=" mb-8 rounded-xl border-2 border-gray-300 dark:border-gray-700" >
            <div className="mb-8 mt-4 flex justify-center">
                <span className="text-4xl text-gray-500 dark:text-gray-400">
                    📖
                </span>
            </div>
            <h1 className="mb-6 text-center text-3xl font-bold ">
                記事タイトル
            </h1>
        </div>
        <MDXRemote source={dummyMarkdownText} components={components} options={options} />
    </div >
}