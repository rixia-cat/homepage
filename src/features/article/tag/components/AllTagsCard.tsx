import { Hash, Tag } from "@phosphor-icons/react/dist/ssr";


export default async function AllTagsCard() {
    const dummyTags = [
        {
            label: "雑記",
            url: "/tag/tag1",
            count: 10
        },
        {
            label: "技術",
            url: "/tag/tag2",
            count: 20
        },
        {
            label: "日記",
            url: "/tag/tag3",
            count: 30
        },
        {
            label: "プログラミング",
            url: "/tag/tag4",
            count: 40
        },
        {
            label: "読書",
            url: "/tag/tag5",
            count: 50
        },
        {
            label: "映画",
            url: "/tag/tag6",
            count: 60
        },
        {
            label: "アニメ",
            url: "/tag/tag7",
            count: 70
        },
        {
            label: "旅行",
            url: "/tag/tag8",
            count: 80
        },
        {
            label: "音楽",
            url: "/tag/tag9",
            count: 90
        },
        {
            label: "お知らせ",
            url: "/tag/tag10",
            count: 100
        },

    ];
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
                    dummyTags.map((tag) => (
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
