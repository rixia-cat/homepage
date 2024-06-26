import LinkButton from "@/components/LinkButton";
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
    <main className="w-full flex-grow  ">

      <div className="flex flex-col w-full p-4">

        <div className="flex justify-center space-x-4">
          <LinkButton href="/articles" label="articles" icon={<Book />} />
          <LinkButton href="/about" label="about me" icon={<Info />} iconPosition="left" />
        </div>

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
