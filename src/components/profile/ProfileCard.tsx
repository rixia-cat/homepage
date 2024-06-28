import { User, UserCircle } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export default async function ProfiileCard() {
    const leadingDescription = "Web・アプリ中心のエンジニアです。";
    return (
        <div className="flex flex-col rounded-lg  border border-gray-300 bg-white p-3 dark:border-gray-400 dark:bg-gray-800">
            <a href='/about' className="mb-4 flex flex-row flex-nowrap items-center border-b border-dashed border-gray-400 pb-2 align-middle dark:border-gray-500">
                <UserCircle className="mr-1.5" size="2rem" />
                <p className="text-lg font-bold no-underline hover:underline">Profile</p>
            </a>
            <div className='flex flex-col items-center'>
                <div className="flex size-36 flex-col items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                    <Image src="/images/rixia.svg" alt="rixiaのプロフィール画像" width={90} height={90} />
                </div>
                <div className="mb-2 mt-4 flex flex-col items-center justify-center">
                    <h1 className="mb-2 text-xl font-bold dark:text-gray-200">rixia</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{leadingDescription}</p>
                </div>
            </div>
        </div>
    )
}