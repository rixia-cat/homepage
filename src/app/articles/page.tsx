import ArticleListView from "@/components/article/ArticleListView";
import { Article } from "@/components/article/type/Article";

export default function ArticlePage() {
    const dummyArticles: Article[] = [
        {
            leaderEmoji: "📖",
            title: "記事タイトルはここに表示します。あいうえおあいうえおあいうえおあいうえお abcdef",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/article/article-1",
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
            url: "/article/article-2",
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
            url: "/article/article-3",
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
            url: "/article/article-4",
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
            url: "/article/article-5",
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
            url: "/article/article-6",
            updatedAt: "2021-01-01 00:00:00",
            tags: [{
                label: "タグ6",
                url: "/article-tags/tag6"
            }]
        }
    ];
    return (
        <div className="grow flex max-w-screen-xl mx-auto">
            <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside>
            <div className="py-4 px-6 grow">
                <h1 className="text-2xl font-bold mb-4">Articles</h1>
                <ArticleListView articles={dummyArticles} />
            </div>
            <aside className="w-64  min-w-64 max-w-64 p-4 border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside>
        </div>
    )
}