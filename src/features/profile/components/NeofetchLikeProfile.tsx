import { logoAsciiArt, name, domain, calcAboutBirthUptime } from "@/features/profile/consts/profile";
import dayjs from "dayjs";

type ProfileDetailData = {
    title: string;
    value: string;
    type: "text" | "link";
}

export default function NeofetchLikeProfile() {
    const getAboutBirthUptimeStr = (): string => {
        const uptime = calcAboutBirthUptime(dayjs());
        return `(about) ${uptime.year} years , ${uptime.month} months `;
    }
    const detailDataset: ProfileDetailData[] = [
        {
            title: "Job",
            value: "Frontend,App Engineer",
            type: "text"
        },
        {
            title: "Uptime",
            value: getAboutBirthUptimeStr(),
            type: "text"
        },
        {
            title: "Main Languages",
            value: "TypeScript,PHP etc.",
            type: "text"
        },
        {
            title: "Frameworks",
            value: "Vue.js,React,Laravel,Flutter,Docker etc.",
            type: "text"
        },
        {
            title: "More",
            value: "/about",
            type: "link"
        }
    ];
    return (
        <div className="flex flex-col flex-nowrap  overflow-hidden rounded-lg border-2 border-gray-500 bg-gray-950 text-gray-200 dark:border-gray-800">
            {/* タイトルバー */}
            <div className="border-b border-b-gray-400 bg-gray-700 p-2 dark:border-b-gray-600 dark:bg-gray-700">
                <div className="flex flex-row flex-nowrap items-center justify-between">
                    <h2 className="flex flex-row flex-nowrap">
                        <p className="text-sm">Profile</p>
                    </h2>
                    <div className="flex flex-row flex-nowrap justify-end">
                        <div className="mr-1 size-2 rounded-full bg-green-500"></div>
                        <div className="mr-1 size-2 rounded-full bg-yellow-500"></div>
                        <div className="mr-1 size-2 rounded-full bg-red-500"></div>
                    </div>
                </div>
            </div>
            {/* ターミナル表示部分 */}
            <div className="flex flex-col flex-nowrap  overflow-auto ">
                <div className="flex flex-row flex-nowrap  p-2">
                    <p className="text-xs  sm:text-base">
                        <span className="text-cyan-300">{name}@{domain}: $ </span>
                        fastfetch
                    </p>
                </div>
                <div className="flex  flex-row flex-nowrap    bg-gray-950 px-2 pb-4 pt-2">
                    {/* ロゴセクション */}
                    <div aria-label="サイトロゴのアスキーアート" className="flex shrink-0 flex-col  flex-nowrap items-center justify-center pr-1">
                        <p className="text-[4px] text-gray-50 sm:text-[6px]" > {
                            logoAsciiArt.map((line, index) => {
                                return (
                                    <span key={index} className="block whitespace-pre-wrap font-monospace">{line}</span>
                                )
                            })
                        }</p >
                    </div >
                    {/* 詳細セクション */}
                    < div className="flex  flex-col flex-nowrap pl-2 align-top text-xs font-medium  sm:text-base" >
                        <p >
                            <span className="text-cyan-300">{name}</span>
                            @
                            <span className="text-cyan-300">{domain}</span>
                        </p>
                        <p>-------------------</p>
                        {
                            detailDataset.map((data, index) => {
                                return (
                                    <p key={index} aria-label={`「${data.title}」項目の説明`} className="flex flex-row  text-nowrap">
                                        <span className="text-cyan-300">{data.title}: </span>
                                        {
                                            data.type === "text" ?
                                                <span className="pl-2">{data.value}</span> :
                                                <a href={data.value} className="pl-2 underline">{data.value}</a>
                                        }
                                    </p>
                                )
                            })
                        }
                    </div >
                </div >
            </div>
        </div>
    );
}