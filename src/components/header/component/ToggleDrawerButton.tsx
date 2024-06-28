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
        <button aria-label="サイドドロワーを表示" className="mr-4 rounded-lg p-2 text-gray-800 outline   outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-500 dark:text-gray-200  dark:outline-gray-700 dark:focus:outline-gray-300 lg:hidden" onClick={onClick}>
            <List size={ICONSIZE} />
        </button>
    );
}