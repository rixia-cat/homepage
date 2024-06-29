import LinkButton from "@/components/button/LinkButton";
import NeofetchLikeProfile from "@/components/profile/NeofetchLikeProfile";
import ProfileCard from "@/components/profile/ProfileCard";
import { Book, Info } from "@phosphor-icons/react/dist/ssr";

const leadingPrefixText = "I'm ";
const leadingNameText = "rixia.";
export default function Home() {
  return (
    <div className="mx-auto flex max-w-screen-lg grow justify-center">

      <main className="max-w-screen-md grow overflow-hidden p-4">
        <h1  >
          <span className="text-5xl text-gray-500 dark:text-gray-400">{leadingPrefixText}</span>
          <span className="text-5xl text-grayishblack dark:text-grayishblack-dark">{leadingNameText}</span>
        </h1>

        <div className="mt-6  ">
          <NeofetchLikeProfile />
        </div>


      </main>

    </div >
  );
}
