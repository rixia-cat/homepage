"use client";
import SiteLogoLink from "../logo/SiteLogoLink";
import LeadingPageLinks from "./components/LeadingPageLinks";
import { ThemeSettingButton } from "./components/ThemeSettingButton";
import ToggleDrawerButton from "./components/ToggleDrawerButton";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 flex w-full border-gray-300 border-b bg-header_background/70 backdrop-blur-sm dark:border-gray-800/70 dark:bg-header_background-dark/70 dark:backdrop-blur-sm">
      <div className="flex h-14 w-full items-center justify-between px-2 ">
        <ToggleDrawerButton />
        <SiteLogoLink />
        <nav className="ml-12 hidden md:flex ">
          <LeadingPageLinks />
        </nav>
        <div className="mx-auto" />
        <ThemeSettingButton />
      </div>
    </header>
  );
};
