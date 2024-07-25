import Image from "next/image";
export default function SiteLogoLink() {
  return (
    <a
      href="/"
      className="flex flex-row items-center rounded-lg px-1 transition-all duration-500 hover:bg-gray-300/80 dark:hover:bg-gray-700/75"
    >
      <div className="flex items-center pr-2">
        <Image
          src="/image/logo/prof-cat.svg"
          alt="サイトアイコン画像"
          width={123.62683}
          height={80.06085}
          priority={true}
          loading="eager"
          className="h-8 w-auto"
        />
      </div>
      <p className=" text-2xl text-grayishblack dark:text-grayishblack-dark">rixia.dev</p>
    </a>
  );
}
