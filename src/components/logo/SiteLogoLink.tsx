import Image from "next/image";
export default function SiteLogoLink() {
  return (
    <a
      href="/"
      className="flex flex-row items-center rounded-lg px-1 transition-all duration-500 hover:bg-primary/10 dark:hover:bg-primary-dark/15"
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
      <p className=" text-2xl text-blueblack dark:text-blueblack-dark">rixia.dev</p>
    </a>
  );
}
