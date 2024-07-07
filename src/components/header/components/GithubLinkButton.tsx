import { githubLink } from "@/features/profile/consts/profile";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

const ICONSIZE = 24;

export default function GitHubLinkButton() {
  return (
    <a
      href={githubLink}
      aria-label="GitHub"
      className="rounded-full border border-gray-400/45 p-2 text-gray-800 dark:border-gray-700 dark:text-gray-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubLogo size={ICONSIZE} aria-hidden="true" />
    </a>
  );
}
