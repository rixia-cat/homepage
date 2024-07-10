import FloatingBottomActionBar from "@/components/floating-action/FloatingBottomActionBar";
import LeadingSection from "@/features/article/leading/LeadingSection";
import ArticleMarkdown from "@/features/article/markdown/ArticleMarkdown";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ProfileCard from "@/features/profile/components/ProfileCard";
import { domain } from "@/features/profile/consts/profile";
import type { TypeBlogSkeleton } from "@/types/generated/contentful";
import { contentfulClient } from "@/util/contentful";
import type { Asset, Entry } from "contentful";
import type { Metadata, ResolvingMetadata } from "next";

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
  if (!blogCollection.length) {
    return <div>404 Not Found</div>;
  }

  const blogData = blogCollection[0];
  const leadingImage = blogData.fields.leadingImage as Asset;
  const leadingImageUrl = leadingImage?.fields.file?.url !== undefined ? `https:${leadingImage.fields.file?.url}` : "";
  const title: string = blogData.fields.title.toString();
  const description: string = blogData.fields.description.toString();
  const body: string = blogData.fields.body.toString();

  return (
    <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
          <h1 className="text-2xl font-bold mb-4">Side</h1>
      </aside> */}

      <main className="mx-auto max-w-full grow grid-cols-1 grid-rows-1 px-4 py-6 md:max-w-screen-md lg:mr-4">
        <LeadingSection leadingImageUrl={leadingImageUrl} title={title} description={description} />

        <ArticleMarkdown blogBodyMarkdown={body} />
      </main>
      <aside className=" mt-48 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>

      <FloatingBottomActionBar />
    </div>
  );
}
