import ArticleCardGridView from "@/features/article/list/components/parts/ArticleCardGridView";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ProfileCard from "@/features/profile/components/ProfileCard";
import type { TypeBlogSkeleton } from "@/types/generated/contentful/TypeBlog";
import { contentfulClient } from "@/util/contentful";
import { Book } from "@phosphor-icons/react/dist/ssr";
import type { Asset } from "contentful";
import type { Metadata, ResolvingMetadata } from "next";
import type { ComponentProps } from "react";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export async function generateMetadata({}, parent: ResolvingMetadata): Promise<Metadata> {
  const parentMetadata = await parent;
  return {
    title: "blog - rixia.dev",
    description: "ブログ記事一覧",
    openGraph: {
      ...parentMetadata.openGraph,
      title: "blog - rixia.dev",
      description: "ブログ記事一覧",
      type: "website",
      url: "https://rixia.dev/blog",
    },
  };
}

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
    <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
                <h1 className="text-2xl font-bold mb-4">Side</h1>
            </aside> */}

      <main className="max-w-full grow px-4 py-6 md:max-w-screen-md">
        <h1 className="flex h-14 flex-row flex-nowrap items-start align-middle font-bold text-2xl ">
          <Book className="mr-1.5" size="2rem" />
          記事一覧
        </h1>
        <ArticleCardGridView articles={articles} />
      </main>
      <aside className="mt-14 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>
    </div>
  );
}
