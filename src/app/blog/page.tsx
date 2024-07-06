import ProfileCard from "@/features/profile/components/ProfileCard";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ArticleListView from "@/features/article/list/components/parts/ArticleListView";
import { contentfulClient } from "@/features/article/util/contentful";
import { TypeBlog, TypeBlogSkeleton } from "../../../@types/generated/contentful";
import { ComponentProps } from "react";

export default async function ArticlePage() {
  const articleCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    order: ["-sys.createdAt"],
  });
  const tagCollection = await contentfulClient.getTags();

  type ArticleListViewProps = ComponentProps<typeof ArticleListView>;
  const articles:ArticleListViewProps["articles"] = articleCollection.items.map((article) => {
    const retData:ArticleListViewProps["articles"][number]={
      leadingImageUrl:`https:${article.fields.leadingImage.fields.file.url}`,
      title:article.fields.title,
      shortDescription:article.fields.description,
      tags:article.metadata.tags.map((tag)=>{
        const matchedTag = tagCollection.items.find((tagItem) => tagItem.sys.id === tag.sys.id);
        return{
          label:matchedTag?.name ?? "",
          url:`/tags/${matchedTag?.sys.id ?? ""}`
        }
      }),
      createdAt:article.sys.createdAt,
      updatedAt:article.sys.updatedAt,
      url:`/blog/${article.fields.slug}`
    }
    return retData;
  });

  return (
    <div className="mx-auto flex max-w-screen-lg grow  justify-center">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside> */}

      <main className="max-w-screen-md grow p-6">
        <h1 className="h-14 text-2xl font-bold">Articles</h1>
        <ArticleListView articles={articles} />
      </main>
      <aside className="mt-14   hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>
    </div>
  );
}
