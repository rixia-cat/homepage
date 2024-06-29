import LinkButton from "@/components/button/LinkButton";
import { Book, Info } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  const dummyTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
  ];
  return (
    <main className="mx-auto max-w-screen-lg grow">

      <div className="flex w-full flex-col p-4">

        {
          dummyTexts.map((text, index) => (
            <div key={index} className="py-4" >
              {text}
            </div>
          ))
        }

      </div>

    </main >
  );
}
