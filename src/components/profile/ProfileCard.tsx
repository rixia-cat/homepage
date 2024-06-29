import { Icon } from '@phosphor-icons/react';
import { GithubLogo, Info, User, UserCircle } from '@phosphor-icons/react/dist/ssr';
import RixiaProfImg from "@/assets/rixia.svg";
import { leadingDescription, profileLinks } from './consts/text';
import Image from 'next/image';


export default async function ProfiileCard() {
    return (
        <div className="flex flex-col rounded-lg  border border-card_border bg-card_background p-3 dark:border-card_border-dark dark:bg-card_background-dark">
            <a href='/about' className="mb-4 flex flex-row flex-nowrap items-center border-b border-dashed border-gray-400 pb-2 align-middle dark:border-gray-500">
                <UserCircle className="mr-1.5" size="2rem" />
                <p className="text-lg font-bold no-underline hover:underline">Profile</p>
            </a>
            <div className='mb-2 '>
                <div className='flex flex-col items-center'>
                    <div className="flex size-36 flex-col items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                        <Image src={RixiaProfImg} alt="rixiaのプロフィール画像" width={90} height={90} />
                    </div>
                </div>
                <p className="mb-2 text-start text-xl font-bold text-grayishblack dark:text-grayishblack-dark">rixia</p>
                <p className="text-start text-sm text-gray-500 dark:text-gray-300">{leadingDescription}</p>
                <div className="mt-4 flex flex-row flex-wrap ">
                    <a href='/about' className="flex flex-row flex-nowrap items-center rounded-lg border border-gray-400 p-1 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800">
                        <Info size="1.25rem" className='mr-1 text-gray-500 dark:text-gray-400' />
                        <span className="text-sm text-gray-500 hover:underline dark:text-gray-400">もっと詳しく</span>
                    </a>
                </div>
                <div className="mt-4 flex flex-row flex-wrap gap-2">
                    {
                        profileLinks.map((link, index) => {
                            return (
                                <a key={index} href={link.url} target='_blank' className="flex flex-row flex-nowrap items-center rounded-full border border-gray-400 p-1.5 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800">
                                    <link.icon size="1.75rem" className='text-gray-500 dark:text-gray-400' />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}