import Image from "next/image";
export default function SiteLogoLink() {
  return (
    <a href="/" className="flex flex-row items-center rounded-lg px-2 hover:bg-gray-300/65 dark:hover:bg-gray-700/65">
      <div className="flex items-center pr-2">
        <Image
          src="/image/logo/prof-cat.svg"
          alt="サイトアイコン画像"
          width={36}
          height={36}
          priority={true}
          loading="eager"
        />
      </div>
      <p className=" text-2xl text-grayishblack dark:text-grayishblack-dark">rixia.dev</p>
    </a>
  );
}
