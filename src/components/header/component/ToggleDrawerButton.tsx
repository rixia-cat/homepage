import { List } from "@phosphor-icons/react/dist/ssr";

type Props = {
    onClick: () => void;
};

const ICONSIZE = 24;

export default function ToggleDrawerButton(props: Props) {
    const onClick = () => {
        props.onClick();
    }
    return (
        <button aria-label="サイドドロワーを表示" className="lg:invisible lg:hidden p-2 rounded-lg text-gray-800   dark:text-gray-200 outline outline-1 outline-gray-300 dark:outline-gray-700  mr-4 focus:outline-2 focus:outline-gray-500 dark:focus:outline-gray-300" onClick={onClick}>
            <List size={ICONSIZE} />
        </button>
    );
}