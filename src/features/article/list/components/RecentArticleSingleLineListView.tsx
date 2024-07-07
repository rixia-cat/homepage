import ArticleSingleLineListView from "@/features/article/list/components/parts/ArticleSingleLineListView"
import { contentfulClient } from "@/features/article/util/contentful"
import type { TypeBlogSkeleton } from "@/types/generated/contentful"
import type { ComponentProps } from "react"

export default async function RecentArticleSingleLineListView() {
  const MAX_SHOW_COUNT = 10
  const articleCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    order: ["-sys.createdAt"],
  })
  const tagCollection = await contentfulClient.getTags()

  type ArticleListViewProps = ComponentProps<typeof ArticleSingleLineListView>
  const articles: ArticleListViewProps["articles"] = articleCollection.items
    .map((article) => {
      const retData: ArticleListViewProps["articles"][number] = {
        leadingImageUrl: `https:${article.fields.leadingImage.fields.file.url}`,
        title: article.fields.title,
        shortDescription: article.fields.description,
        tags: article.metadata.tags.map((tag) => {
          const matchedTag = tagCollection.items.find((tagItem) => tagItem.sys.id === tag.sys.id)
          return {
            label: matchedTag?.name ?? "",
            url: `/tags/${matchedTag?.sys.id ?? ""}`,
          }
        }),
        createdAt: article.sys.createdAt,
        updatedAt: article.sys.updatedAt,
        url: `/blog/${article.fields.slug}`,
      }
      return retData
    })
    .slice(0, MAX_SHOW_COUNT)

  const andmoreCount =
    articleCollection.items.length - MAX_SHOW_COUNT > 0 ? articleCollection.items.length - MAX_SHOW_COUNT : 0

  return <ArticleSingleLineListView articles={articles} andmoreCount={andmoreCount} />
}
