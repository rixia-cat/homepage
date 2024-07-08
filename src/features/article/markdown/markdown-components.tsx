import type { Components } from "react-markdown";
import CodeBlock from "./components/CodeBlock";

export function articleMarkdownComponents(components: Partial<Components>): Partial<Components> {
  return {
    ...components,

    h1: ({ children }) => {
      return (
        <h1 className="mt-6 mb-4 border-gray-300 border-b-2 border-dashed pb-2 font-bold text-3xl first:mt-0 dark:border-gray-700">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      return (
        <h2 className="mt-12 mb-6 border-gray-300 border-b-2 border-dashed pb-2 font-bold text-2xl first:mt-0 dark:border-gray-700">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return <h3 className="mt-8 mb-4 font-bold text-xl">{children}</h3>;
    },
    h4: ({ children }) => {
      return <h4 className="mt-8 mb-4 font-bold text-lg">{children}</h4>;
    },
    h5: ({ children }) => {
      return <h5 className="mt-8 mb-2 font-bold text-base">{children}</h5>;
    },
    h6: ({ children }) => {
      return <h6 className="mt-8 mb-2 font-bold text-sm">{children}</h6>;
    },

    hr: () => {
      return <hr className="my-9 border-gray-300 border-t-2 border-dashed dark:border-gray-700" />;
    },

    /* Table */
    table: ({ children }) => {
      return (
        <div className="mb-3 overflow-x-auto">
          <table className="table-auto">{children}</table>
        </div>
      );
    },
    th: ({ children }) => {
      return (
        <th className="border border-gray-300 bg-gray-200 px-2 py-1 align-middle font-bold dark:border-gray-700 dark:bg-gray-800">
          {children}
        </th>
      );
    },
    td: ({ children }) => {
      return <td className="border border-gray-300 p-2 dark:border-gray-700 ">{children}</td>;
    },

    p: ({ children }) => {
      return <p className="mb-3 text-base leading-7">{children}</p>;
    },

    a: ({ href, children }) => {
      const isInternalLink = href ? href.startsWith("/") : false;
      return (
        <a
          href={href}
          className="text-blue-600 underline dark:text-blue-400"
          target={isInternalLink ? "_self" : "_blank"}
        >
          {children}
        </a>
      );
    },

    /* List */
    ul: ({ children }) => {
      return <ul className="mb-2 list-inside list-disc leading-8">{children}</ul>;
    },
    ol: ({ children }) => {
      return <ol className="list-inside list-decimal leading-8">{children}</ol>;
    },
    li: ({ children }) => {
      return <li className="leading-8">{children}</li>;
    },
    blockquote: ({ children }) => {
      return (
        <blockquote className="my-3 border-gray-300 border-l-4 px-2 align-middle dark:border-gray-700">
          <div className="p-2 leading-8">{children}</div>
        </blockquote>
      );
    },

    code: ({ children }) => {
      return <CodeBlock>{children}</CodeBlock>;
    },
  };
}
