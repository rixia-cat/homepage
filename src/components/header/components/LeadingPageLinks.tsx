import { leadingPageLinks } from "../consts/leading-pages";

export default function LeadingPageLinks() {
  return (
    <ul className="flex flex-row justify-between gap-4 ">
      {leadingPageLinks.map((pageLink) => (
        <li key={pageLink.url}>
          <a
            href={pageLink.url}
            className="group flex items-center rounded-lg p-2 decoration-black transition-all duration-500 hover:bg-primary/10 hover:underline dark:decoration-gray-100 dark:hover:bg-primary-dark/15"
          >
            <div className="flex h-5 items-center border-primary/55 border-l-2 pr-2 dark:border-primary-dark/30 dark:group-hover:border-gray-400" />
            <span className="text-blueblack tracking-widest dark:text-blueblack-dark">{pageLink.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
