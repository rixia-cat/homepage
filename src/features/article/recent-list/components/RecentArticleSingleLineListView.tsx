import ArticleSingleLineListView from "@/features/article/recent-list/components/ArticleSingleLineListView";
import type { TypeBlogSkeleton } from "@/types/generated/contentful";
import { contentfulClient } from "@/util/contentful";
import type { Asset } from "contentful";
import type { ComponentProps } from "react";

export default async function RecentArticleSingleLineListView() {
  const MAX_SHOW_COUNT = 10;
  const articleCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    order: ["-fields.publishedAt"],
  });
  const tagCollection = await contentfulClient.getTags();

  type ArticleListViewProps = ComponentProps<typeof ArticleSingleLineListView>;
  const articles: ArticleListViewProps["articles"] = articleCollection.items
    .map((article) => {
      const leadingImageData = article.fields.leadingImage as Asset;
      const leadingImageUrlSrc = leadingImageData?.fields?.file?.url ?? "";
      const leadingImageUrl = leadingImageUrlSrc ? `https:${leadingImageUrlSrc}` : "";

      const retData: ArticleListViewProps["articles"][number] = {
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
    })
    .slice(0, MAX_SHOW_COUNT);

  const andmoreCount =
    articleCollection.items.length - MAX_SHOW_COUNT > 0 ? articleCollection.items.length - MAX_SHOW_COUNT : 0;

  return <ArticleSingleLineListView articles={articles} andmoreCount={andmoreCount} />;
}
