import ArticleCardGridView from "@/features/article/list/components/parts/ArticleCardGridView";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ProfileCard from "@/features/profile/components/ProfileCard";
import type { TypeBlogSkeleton } from "@/types/generated/contentful/TypeBlog";
import { contentfulClient } from "@/util/contentful";
import type { Asset } from "contentful";
import type { ComponentProps } from "react";

export default async function ArticlePage() {
  const articleCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    order: ["-fields.publishedAt"],
  });
  const tagCollection = await contentfulClient.getTags();

  type ArticleCardGridViewProps = ComponentProps<typeof ArticleCardGridView>;
  const articles: ArticleCardGridViewProps["articles"] = articleCollection.items.map((article) => {
    const leadingImageData = article.fields.leadingImage as Asset;
    const leadingImageUrlSrc = leadingImageData?.fields?.file?.url ?? "";
    const leadingImageUrl = leadingImageUrlSrc ? `https:${leadingImageUrlSrc}` : "";

    const retData: ArticleCardGridViewProps["articles"][number] = {
      leadingImageUrl: leadingImageUrl,
      title: article.fields.title,
      shortDescription: article.fields.description,
      tags: article.metadata.tags.map((tag) => {
        const matchedTag = tagCollection.items.find((tagItem) => tagItem.sys.id === tag.sys.id);
        return {
          label: matchedTag?.name ?? "",
          url: `/tags/${matchedTag?.sys.id ?? ""}`,
        };
      }),
      publishedAt: article.fields.publishedAt,
      updatedAt: article.sys.updatedAt,
      url: `/blog/${article.fields.slug}`,
    };
    return retData;
  });

  return (
    <div className="mx-auto flex max-w-screen-lg grow justify-center">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside> */}

      <main className="max-w-screen-md grow p-6">
        <h1 className="h-14 font-bold text-2xl">Articles</h1>
        <ArticleCardGridView articles={articles} />
      </main>
      <aside className="mt-14 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>
    </div>
  );
}
