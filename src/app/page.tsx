import CatWalkSection from "@/components/cat-walk/CatWalkSection";

export default function Home() {
  const dummyTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは"
  ];
  return (
    <main className="w-full flex-grow  bg-background dark:bg-background-dark ">

      <div className="flex flex-col w-full ">

        {
          dummyTexts.map((text, index) => (
            <div key={index} className="p-4" >
              {text}
            </div>
          ))
        }

      </div>

    </main >
  );
}
