import type { TypeBlogSkeleton } from "@/types/generated/contentful/TypeBlog";
import { Hash } from "@phosphor-icons/react/dist/ssr";
import { contentfulClient } from "../../../../util/contentful";

type TagData = {
  label: string;
  url: string;
  count: number;
};

export default async function AllTagsCard() {
  const tagsCollection = await contentfulClient.getTags();
  const allBlogs = await contentfulClient.getEntries<TypeBlogSkeleton>();

  const tags: TagData[] = tagsCollection.items
    .map((tag) => {
      const matchedBlogs = allBlogs.items.filter((blog) =>
        blog.metadata.tags.some((blogTag) => blogTag.sys.id === tag.sys.id)
      );
      const retData: TagData = {
        label: tag.name,
        url: `/tags/${tag.sys.id}`,
        count: matchedBlogs.length,
      };
      return retData;
    })
    .sort((a, b) => b.count - a.count);

  return (
    <div className="flex flex-col rounded-2xl border border-card_border bg-card_background dark:border-card_border-dark dark:bg-card_background-dark">
      <div className="w-full overflow-hidden p-3">
        <div className="flex w-full flex-row flex-nowrap items-center border-gray-400 border-b border-dashed pb-2 align-middle dark:border-gray-500">
          <a href="/tags" className=" flex flex-row flex-nowrap items-center ">
            <Hash className="mr-1.5" size="1.75rem" />
            <p className="line-clamp-2 font-bold text-grayishblack text-lg no-underline hover:underline dark:text-grayishblack-dark">
              タグ一覧
            </p>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-3 pb-3">
        {tags.map((tag) => (
          <a
            href={tag.url}
            key={tag.url}
            className="rounded-full border border-gray-300 bg-gray-100 px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800"
          >
            {tag.label}
            <span className="ml-2 text-gray-600 text-xs dark:text-gray-300">x{tag.count}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
