import { githubLink } from "@/features/profile/consts/profile";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

const ICONSIZE = "24px";

export default function GitHubLinkButton() {
  return (
    <a
      href={githubLink}
      aria-label="GitHub"
      className="ransition-all rounded-full border border-gray-500/25 p-2 text-gray-600 duration-300 hover:bg-primary/10 dark:border-gray-700/85 dark:text-gray-300/85 dark:hover:bg-primary-dark/15"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubLogo size={ICONSIZE} aria-hidden="true" />
    </a>
  );
}
