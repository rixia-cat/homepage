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
        <button aria-label="サイドドロワーを表示" className="lg:invisible lg:hidden p-2 text-gray-800 bg-gray-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 mr-4 " onClick={onClick}>
            <List size={ICONSIZE} />
        </button>
    );
}