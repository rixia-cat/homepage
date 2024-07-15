import FloatingBottomActionBar from "@/components/floating-action/FloatingBottomActionBar";
import LeadingSection from "@/features/article/leading/LeadingSection";
import ArticleMarkdown from "@/features/article/markdown/ArticleMarkdown";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import TocCard from "@/features/article/toc/TocCard";
import { domain } from "@/features/profile/consts/profile";
import type { TypeBlogSkeleton } from "@/types/generated/contentful";
import { contentfulClient } from "@/util/contentful";
import dayjs from "@/util/dayjs";
import { ArrowUUpLeft, CalendarDots, Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Asset, Entry } from "contentful";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;
// 記事データ取得
async function getArticleData(slug: string): Promise<Entry<TypeBlogSkeleton>[]> {
  const blogCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    "fields.slug": slug,
  });

  return blogCollection.items;
}
// 全タグデータ取得
async function getTagsData() {
  const tagsCollection = await contentfulClient.getTags();
  return tagsCollection;
}
// SSG用
export async function generateStaticParams() {
  const blogCollection = await contentfulClient.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
  });

  return blogCollection.items.map((article) => ({
    slug: article.fields.slug,
  }));
}
export async function generateMetadata(props: ArticlePageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const parentMetadata = await parent;

  const blogCollection = await getArticleData(props.params.slug);
  if (!blogCollection.length) {
    return {
      title: "404 Not Found",
      description: "404 Not Found",
    };
  }
  const blogData = blogCollection[0];
  return {
    title: `${blogData.fields.title} - ${domain}`,
    description: blogData.fields.description.toString(),
    openGraph: {
      ...parentMetadata.openGraph,
      title: `${blogData.fields.title} - ${domain}`,
      description: blogData.fields.description.toString(),
      type: "article",
      url: `https://${domain}/blog/${props.params.slug}`,
    },
  };
}

export default async function ArticlePage(props: ArticlePageProps) {
  const slug = props.params.slug;
  const blogCollection = await getArticleData(slug);
  const tagsCollection = await getTagsData();
  if (!blogCollection.length) {
    return <div>404 Not Found</div>;
  }

  const blogData = blogCollection[0];
  const leadingImage = blogData.fields.leadingImage as Asset;
  const leadingImageUrl = leadingImage?.fields.file?.url !== undefined ? `https:${leadingImage.fields.file?.url}` : "";
  const title: string = blogData.fields.title.toString();
  const description: string = blogData.fields.description.toString();
  const body: string = blogData.fields.body.toString();
  const publishedAtStr: string = dayjs(blogData.fields.publishedAt.toString()).tz().format("YYYY/MM/DD");
  const updatedAt: string = dayjs(blogData.sys.updatedAt).tz().format("YYYY/MM/DD");
  const tagsSrc = blogData.metadata.tags;
  const tags = tagsSrc.map((tag) => ({
    label: tagsCollection.items.find((t) => t.sys.id === tag.sys.id)?.name ?? "",
    url: `/tags/${tag.sys.id}`,
  }));

  return (
    <div className="">
      <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
        {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
          <h1 className="text-2xl font-bold mb-4">Side</h1>
      </aside> */}

        <main className="mx-auto max-w-full grow grid-cols-1 grid-rows-1 px-4 py-4 md:max-w-screen-md lg:mr-4">
          <div className="mb-4 inline-flex cursor-pointer rounded-2xl px-1 hover:bg-gray-200 hover:underline dark:hover:bg-gray-700">
            <Link href="/blog">
              <div className="flex flex-row items-center gap-2">
                <ArrowUUpLeft size="1.4rem" className="text-gray-500 dark:text-gray-300" />
                <span className="text-gray-500 text-sm dark:text-gray-300">記事一覧へ</span>
              </div>
            </Link>
          </div>

          <LeadingSection leadingImageUrl={leadingImageUrl} title={title} description={description} />

          <div className="my-4 flex flex-row flex-wrap justify-start gap-2">
            {/* 更新日時 */}
            <p className="flex items-center rounded-2xl border border-gray-300 px-1.5 py-0.5 text-gray-600 text-sm dark:border-gray-700 dark:text-gray-300">
              <CalendarDots size="1.5rem" className="mr-1" />
              <span className="mr-1">公開:</span>
              {publishedAtStr}
            </p>

            {/* 更新日時 */}
            <p className="flex items-center rounded-2xl border border-gray-300 px-1.5 py-0.5 text-gray-600 text-sm dark:border-gray-700 dark:text-gray-300">
              <Sparkle size="1.5rem" className="mr-1" />
              <span className="mr-1">更新:</span>
              {updatedAt}
            </p>
          </div>

          <div className="mt-4 mb-6 flex flex-row flex-wrap justify-start gap-2">
            {tags.map((tag) => (
              <a
                href={tag.url}
                key={tag.url}
                className="rounded-2xl border border-gray-300 bg-gray-100 px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800"
              >
                {tag.label}
              </a>
            ))}
          </div>

          <ArticleMarkdown blogBodyMarkdown={body} />
        </main>
        <aside className="mt-52 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
          <AllTagsCard />
          {/* <ProfileCard isCompact /> */}
          <div className="sticky top-16">
            <TocCard />
          </div>
        </aside>
      </div>
      <FloatingBottomActionBar />
    </div>
  );
}
