import { leadingPageLinks } from "../consts/leading-pages"

export default function LeadingPageLinks() {
  return (
    <ul className="flex flex-row justify-between gap-4 ">
      {leadingPageLinks.map((pageLink) => (
        <li key={pageLink.url}>
          <a
            href={pageLink.url}
            className="group flex items-center rounded-lg p-2 decoration-black hover:bg-gray-300/65 hover:underline dark:decoration-gray-100 dark:hover:bg-gray-700/65"
          >
            <div className="flex h-5 items-center border-gray-500 border-l-2 pr-2 dark:border-gray-600 dark:group-hover:border-gray-400" />
            <span className="text-grayishblack tracking-widest dark:text-grayishblack-dark">{pageLink.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
