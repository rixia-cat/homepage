import { List } from "@phosphor-icons/react/dist/ssr";
import * as Dialog from "@radix-ui/react-dialog";
import SiteDrawerContent from "./SiteDrawerContent";

const ICONSIZE = 24;

export default function ToggleDrawerButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          aria-label="サイドドロワーを表示"
          className="ransition-all mr-2 rounded-full border border-gray-500/25 p-2 text-gray-600 hover:bg-primary/10 md:hidden dark:border-gray-700/85 dark:text-gray-300/85 dark:hover:bg-primary-dark/15"
          type="button"
        >
          <List size={ICONSIZE} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-drawer bg-black/40 backdrop-blur-sm" />
        <SiteDrawerContent />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
