import ProfileCard from "@/components/profile/ProfileCard";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ArticleListView from "@/features/article/list/components/parts/ArticleListView";
import { dummyArticles } from "@/features/article/dummy-data/articleDummyData";

export default function ArticlePage() {
    return (
        <div className="mx-auto flex max-w-screen-lg  grow">
            {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside> */}
            <main className="max-w-screen-md grow p-6">
                <h1 className="h-14 text-2xl font-bold">Articles</h1>
                <ArticleListView articles={dummyArticles} />
            </main>
            <aside className="mt-14   hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
                <AllTagsCard />
                <ProfileCard />
            </aside>
        </div>
    )
}