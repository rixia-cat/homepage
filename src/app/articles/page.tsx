import ProfiileCard from "@/components/profile/ProfileCard";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ArticleListView from "@/features/article/list/components/ArticleListView";
import { Article } from "@/features/article/type/Article";

export default function ArticlePage() {
    const dummyArticles: Article[] = [
        {
            leaderEmoji: "📖",
            title: "記事タイトルはここに表示します。あいうえおあいうえおあいうえおあいうえお abcdef",
            shortDescription: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。",
            url: "/articles/article-1",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ1",
                url: "/tag/tag1"
            }]
        },
        {
            leaderEmoji: "📖",
            title: "短めタイトル",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/articles/article-2",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ2",
                url: "/article-tags/tag2"
            }]
        },
        {
            leaderEmoji: "📖",
            title: "短めタイトル",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/articles/article-3",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ3",
                url: "/article-tags/tag3"
            }]
        },
        {
            leaderEmoji: "📖",
            title: "短めタイトル",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/articles/article-4",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ4",
                url: "/article-tags/tag4"
            }]
        },
        {
            leaderEmoji: "📖",
            title: "短めタイトル",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/articles/article-5",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ5",
                url: "/article-tags/tag5"
            }]
        },
        {
            leaderEmoji: "📖",
            title: "短めタイトル",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/articles/article-6",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ6",
                url: "/article-tags/tag6"
            }]
        }
    ];
    return (
        <div className="mx-auto flex max-w-5xl grow">
            {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside> */}
            <div className="max-w-screen-md grow p-6">
                <h1 className="h-14 text-2xl font-bold">Articles</h1>
                <ArticleListView articles={dummyArticles} />
            </div>
            <aside className="mt-14   hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
                <AllTagsCard />
                <ProfiileCard />
            </aside>
        </div>
    )
}