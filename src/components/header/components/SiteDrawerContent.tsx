import SiteLogoLink from '@/components/logo/SiteLogoLink';
import { XCircle } from '@phosphor-icons/react/dist/ssr/XCircle';
import * as Dialog from '@radix-ui/react-dialog';
import { LeadingPageLink, leadingPageLinks } from '../consts/leading-pages';

const ICONSIZE = 24;

const pageLinks: LeadingPageLink[] = [
    {
        label: "home",
        url: "/"
    },
    ...leadingPageLinks,
]

export default function SiteDrawerContent() {
    return (
        <Dialog.Content className="fixed z-50 h-full w-96 max-w-[75%]  border-r border-gray-300  bg-header_background/70  backdrop-blur-sm dark:border-gray-800/70  dark:bg-header_background-dark/70 dark:backdrop-blur-sm">
            <div className='flex h-14 w-full items-center px-2 '>
                <Dialog.Close asChild>
                    <button aria-label="サイドドロワーを閉じる" className="mr-2 rounded-lg border border-gray-400 p-2 text-gray-800 dark:border-gray-700  dark:text-gray-200  lg:hidden" >
                        <XCircle size={ICONSIZE} />
                    </button>
                </Dialog.Close>
                <Dialog.Title className="">
                    <SiteLogoLink />
                </Dialog.Title>
            </div>
            <Dialog.Description className="p-4">
                <nav>
                    <ul className="flex flex-col justify-between gap-2">
                        {pageLinks.map((pageLink) => (
                            <li key={pageLink.url}>
                                <a href={pageLink.url} className="group flex items-center rounded-lg p-2 decoration-black hover:bg-gray-300/65 hover:underline dark:decoration-gray-100	 dark:hover:bg-gray-700/65">
                                    <div className="flex h-5 items-center border-l-2 border-gray-400 pr-2 dark:border-gray-600 dark:group-hover:border-gray-400" />
                                    <span className="font-semibold tracking-widest text-grayishblack dark:text-grayishblack-dark" >{pageLink.label}</span>
                                </a>
                            </li>
                        ))
                        }
                    </ul >
                </nav>
            </Dialog.Description>
        </Dialog.Content>
    );
}