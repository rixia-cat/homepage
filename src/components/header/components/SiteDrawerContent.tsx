import SiteLogoLink from "@/components/logo/SiteLogoLink";
import { XCircle } from "@phosphor-icons/react/dist/ssr/XCircle";
import * as Dialog from "@radix-ui/react-dialog";
import { type LeadingPageLink, leadingPageLinks } from "../consts/leading-pages";

const ICONSIZE = 24;

const pageLinks: LeadingPageLink[] = [
  {
    label: "home",
    url: "/",
    description: "ホーム",
  },
  ...leadingPageLinks,
];

export default function SiteDrawerContent() {
  return (
    <Dialog.Content className="fixed z-drawer h-full w-96 max-w-[75%] border-gray-300 border-r bg-header_background/70 backdrop-blur-sm dark:border-gray-800/70 dark:bg-header_background-dark/70 dark:backdrop-blur-sm">
      <div className="flex h-14 w-full items-center px-2 ">
        <Dialog.Close asChild>
          <button
            aria-label="サイドドロワーを閉じる"
            className="ransition-all mr-2 rounded-full border border-gray-400 p-2 text-gray-800 hover:bg-primary/10 lg:hidden dark:border-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark/15"
            type="button"
          >
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
                <a
                  href={pageLink.url}
                  className="group flex items-center rounded-lg px-2 py-3 decoration-black hover:bg-primary/10 hover:underline dark:decoration-gray-100 dark:hover:bg-primary-dark/15"
                >
                  <div className="flex h-5 items-center border-primary/55 border-l-2 pr-2 dark:border-primary-dark/30 dark:group-hover:border-gray-400" />
                  <span className="font-semibold text-blueblack tracking-widest dark:text-blueblack-dark">
                    {pageLink.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Dialog.Description>
    </Dialog.Content>
  );
}
