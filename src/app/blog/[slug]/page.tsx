import ArticleMarkdown from "@/features/article/markdown/ArticleMarkdown";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ProfileCard from "@/features/profile/components/ProfileCard";
import type { TypeBlogSkeleton } from "@/types/generated/contentful";
import { contentfulClient } from "@/util/contentful";
import type { Asset } from "contentful";
import Image from "next/image";

export async function generateStaticParams() {
  const blogCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
  });

  return blogCollection.items.map((article) => ({
    slug: article.fields.slug,
  }));
}
export const dynamicParams = false;

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const blogCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!blogCollection.items.length) {
    return <div>404 Not Found</div>;
  }

  const blogData = blogCollection.items[0];
  const leadingImage = blogData.fields.leadingImage as Asset;
  const leadingImageUrl = leadingImage?.fields.file?.url !== undefined ? `https:${leadingImage.fields.file?.url}` : "";

  return (
    <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
          <h1 className="text-2xl font-bold mb-4">Side</h1>
      </aside> */}

      <main className="mx-auto max-w-full grow grid-cols-1 grid-rows-1 px-4 py-6 md:max-w-screen-md lg:mr-4">
        <div className="relative mb-10 grid h-40 w-full rounded-xl border-2 border-gray-300 dark:border-gray-700 ">
          {leadingImageUrl ? (
            <Image
              src={leadingImageUrl}
              layout="fill"
              className="col-start-1 row-start-1 h-full max-h-full w-full max-w-full rounded-xl object-cover"
              alt={`${blogData.fields.title}のイメージ画像`}
              priority={true}
              loading="eager"
            />
          ) : null}

          <div className="col-start-1 row-start-1 h-full max-h-full min-h-full rounded-xl bg-black/45 backdrop-blur-sm" />

          <div className="col-start-1 row-start-1 rounded-xl px-2 ">
            <div className="flex h-full items-center justify-center">
              <h1 className=" text-center font-bold text-3xl text-gray-100 mix-blend-luminosity dark:text-gray-200 ">
                {blogData.fields.title}
              </h1>
            </div>
          </div>
        </div>

        <ArticleMarkdown blogBodyMarkdown={blogData.fields.body} />
      </main>
      <aside className=" mt-48 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>
    </div>
  );
}
