"use client";
import SiteLogoLink from "../logo/SiteLogoLink";
import GitHubLinkButton from "./components/GithubLinkButton";
import LeadingPageLinks from "./components/LeadingPageLinks";
import { ThemeSettingButton } from "./components/ThemeSettingButton";
import ToggleDrawerButton from "./components/ToggleDrawerButton";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-header flex w-full border-header_background/25 border-b bg-header_background/70 backdrop-blur-sm dark:border-header_background-dark/25 dark:bg-header_background-dark/70 dark:backdrop-blur-sm">
      <div className="flex h-14 w-full items-center justify-between px-2 ">
        <ToggleDrawerButton />
        <SiteLogoLink />
        <nav className="ml-12 hidden md:flex ">
          <LeadingPageLinks />
        </nav>
        <div className="mx-auto" />
        <div className="flex gap-x-2">
          <GitHubLinkButton />
          <ThemeSettingButton />
        </div>
      </div>
    </header>
  );
};
