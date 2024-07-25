export type LeadingPageLink = {
  label: string;
  url: string;
  description: string;
};
export const leadingPageLinks: LeadingPageLink[] = [
  {
    label: "blog",
    url: "/blog",
    description: "テック系や雑記などの記事",
  },
  {
    label: "scribble",
    url: "/scribble",
    description: "とりとめのないメモや雑記",
  },
  {
    label: "about",
    url: "/about",
    description: "このサイト・「rixia」について",
  },
];
