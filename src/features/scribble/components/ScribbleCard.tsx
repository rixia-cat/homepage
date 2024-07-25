import { handwriteLike } from "@/util/font";

type ScribbleCardProps = {
  scribble: {
    id: string;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    url: string;
  };
};

const tapeColorClassPairs = [
  {
    default: "before:bg-blue-800/25",
    dark: "dark:before:bg-blue-500/25",
  },
  {
    default: "before:bg-green-800/25",
    dark: "dark:before:bg-green-500/25",
  },
  {
    default: "before:bg-yellow-800/25",
    dark: "dark:before:bg-yellow-500/25",
  },
  {
    default: "before:bg-red-800/25",
    dark: "dark:before:bg-red-500/25",
  },
  {
    default: "before:bg-indigo-800/25",
    dark: "dark:before:bg-indigo-500/25",
  },
  {
    default: "before:bg-pink-800/25",
    dark: "dark:before:bg-pink-500/25",
  },
  {
    default: "before:bg-purple-800/25",
    dark: "dark:before:bg-purple-500/25",
  },
  {
    default: "before:bg-gray-800/25",
    dark: "dark:before:bg-gray-500/25",
  },
  {
    default: "before:bg-orange-800/25",
    dark: "dark:before:bg-orange-500/25",
  },
];

export default function ScribbleCard(props: ScribbleCardProps) {
  const randomIdx = Math.floor(Math.random() * tapeColorClassPairs.length);
  const randomColorPair = tapeColorClassPairs[randomIdx];
  const randomColorClassStr = ` ${randomColorPair.default} ${randomColorPair.dark}`;

  return (
    <a
      // href={props.scribble.url}
      href="/scribble"
      className={`before:-top-4 relative mt-4 h-50 w-full rounded-md border-gray-500/15 border-r border-b bg-gray-200 p-4 shadow-lg transition before:absolute before:left-1/3 before:h-8 before:w-[25%] before:max-w-36 before:rotate-3 before:border-transparent before:border-x-4 before:border-dashed before:backdrop-blur-[1px] hover:scale-110 dark:bg-gray-800 ${randomColorClassStr}`}
    >
      <div className="flex h-full flex-col overflow-y-hidden " style={handwriteLike.style}>
        <h2 className="mb-2 line-clamp-2 border-gray-800/15 border-b-2 pb-2 font-bold text-gray-800/85 text-sm dark:border-gray-300/15 dark:text-gray-300/90">
          {props.scribble.title}
        </h2>
        <p className="line-clamp-5 overflow-hidden overflow-ellipsis break-words font-semibold text-gray-800/80 text-xs dark:text-gray-300/85">
          {props.scribble.body}
        </p>
      </div>
    </a>
  );
}
