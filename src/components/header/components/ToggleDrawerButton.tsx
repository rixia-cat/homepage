import { List, XCircle } from "@phosphor-icons/react/dist/ssr";
import * as Dialog from '@radix-ui/react-dialog';
import SiteDrawerContent from "./SiteDrawerContent";

const ICONSIZE = 24;


export default function ToggleDrawerButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button aria-label="サイドドロワーを表示" className="mr-2 rounded-lg border border-gray-300 p-2 text-gray-800 dark:border-gray-700  dark:text-gray-200  md:hidden" >
                    <List size={ICONSIZE} />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed  inset-0 z-50 bg-black/40 backdrop-blur-sm" />
                <SiteDrawerContent />
            </Dialog.Portal>
        </Dialog.Root>
    );
}