import { articleMDXComponents } from "@/app/mdx-components";
import AllTagsCard from "@/features/article/tag/components/AllTagsCard";
import ProfileCard from "@/features/profile/components/ProfileCard";
import type { TypeBlogSkeleton } from "@/types/generated/contentful";
import { contentfulClient } from "@/util/contentful";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const components = articleMDXComponents({});
const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

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

  return (
    <div className="mx-auto flex max-w-screen-lg grow justify-center">
      {/* <aside className="w-64 min-w-64 max-w-64 p-4  border-x-2 hidden lg:block">
          <h1 className="text-2xl font-bold mb-4">Side</h1>
      </aside> */}

      <main className="mx-6 max-w-screen-md grow p-6">
        <div className=" mb-8 rounded-xl border-2 border-gray-300 dark:border-gray-700">
          <div className="mt-2 mb-6 flex justify-center">
            <span className="text-5xl text-gray-500 dark:text-gray-400">{"📝"}</span>
          </div>
          <h1 className="mb-6 text-center font-bold text-3xl text-grayishblack dark:text-grayishblack-dark ">
            {blogData.fields.title}
          </h1>
        </div>
        <MDXRemote source={blogData.fields.body} components={components} options={options} />
      </main>
      <aside className=" mt-40 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <AllTagsCard />
        <ProfileCard />
      </aside>
    </div>
  );
}
