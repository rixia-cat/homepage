import { Hash, Tag } from "@phosphor-icons/react/dist/ssr";
import { contentfulClient } from "../../util/contentful";
import { TypeBlogSkeleton } from "../../../../../@types/generated/contentful";

type TagData = {
    label: string;
    url: string;
    count: number;
};

export default async function AllTagsCard() {
    const  tagsCollection = await contentfulClient.getTags();
    const allBlogs = await contentfulClient.getEntries<TypeBlogSkeleton>();
    
    const tags:TagData[] =  tagsCollection.items.map((tag) =>{
        const matchedBlogs = allBlogs.items.filter((blog) => blog.metadata.tags.some((blogTag) => blogTag.sys.id === tag.sys.id));
        const retData:TagData = {
            label: tag.name,
            url: `/tags/${tag.sys.id}`,
            count: matchedBlogs.length,
        }
        return retData;
    }).sort((a, b) => b.count - a.count);
    
    return (
        <div className="flex flex-col  rounded-lg border border-card_border bg-card_background dark:border-card_border-dark dark:bg-card_background-dark">
            <div className="flex w-full">
                <div className="h-full grow overflow-hidden p-3">
                    <a href='/tags' className="mb-0.5 flex flex-row flex-nowrap items-center border-b border-dashed border-gray-400 pb-2 align-middle dark:border-gray-500">
                        <Hash className="mr-1.5 text-2xl" />
                        <p className="line-clamp-2 text-lg font-bold no-underline hover:underline">Tags</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 px-3 pb-3">
                {
                    tags.map((tag) => (
                        <a href={tag.url} key={tag.url} className="rounded-full border  border-gray-300 bg-gray-100 px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800">
                            {tag.label}
                            <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">x{tag.count}</span>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
