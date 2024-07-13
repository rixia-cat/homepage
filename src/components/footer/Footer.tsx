import SiteLogoLink from "../logo/SiteLogoLink";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex w-full border-gray-300 border-t bg-footer_background backdrop-blur-sm dark:border-gray-800 dark:bg-footer_background-dark"
    >
      <div className="flex h-20 w-full items-center justify-between px-4 ">
        <SiteLogoLink />
        <p className="text-end text-xs sm:text-sm ">© rixia. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
