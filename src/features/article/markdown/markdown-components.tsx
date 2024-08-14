import { judgeAndExtractImgNode } from "@/features/article/markdown/utils/parseReactNode";
import type { MDXRemoteProps } from "next-mdx-remote";
import Image from "next/image";
import CodeBlock from "./components/code/CodeBlock";

export function articleMarkdownComponents(components: MDXRemoteProps["components"]): MDXRemoteProps["components"] {
  return {
    ...components,

    h1: ({ children, id }) => {
      return (
        <h1
          className="mt-6 mb-4 border-primary/25 border-b-2 border-dashed pb-2 font-bold text-3xl text-blueblack first:mt-0 dark:border-primary-dark/25 dark:text-blueblack-dark"
          id={id}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, id }) => {
      return (
        <h2
          className="mt-12 mb-6 border-primary/25 border-b-2 border-dashed pb-2 font-bold text-2xl text-blueblack first:mt-0 dark:border-primary-dark/25 dark:text-blueblack-dark"
          id={id}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, id }) => {
      return (
        <h3 className="mt-8 mb-4 font-bold text-blueblack text-xl dark:text-blueblack-dark" id={id}>
          {children}
        </h3>
      );
    },
    h4: ({ children, id }) => {
      return (
        <h4 className="mt-8 mb-4 font-bold text-blueblack text-lg dark:text-blueblack-dark" id={id}>
          {children}
        </h4>
      );
    },
    h5: ({ children, id }) => {
      return (
        <h5 className="mt-8 mb-2 font-bold text-base text-blueblack dark:text-blueblack-dark" id={id}>
          {children}
        </h5>
      );
    },
    h6: ({ children, id }) => {
      return (
        <h6 className="mt-8 mb-2 font-bold text-blueblack text-sm dark:text-blueblack-dark" id={id}>
          {children}
        </h6>
      );
    },

    hr: () => {
      return (
        <hr className="mt-9 mb-8 aspect-[102/8] h-full w-full border-none bg-[length:100%] bg-[url('/image/hr/hr-kota-sp.svg')] bg-no-repeat md:aspect-[149/8] md:bg-[url('/image/hr/hr-kota.svg')] dark:bg-[url('/image/hr/hr-kota-sp-dark.svg')] dark:md:bg-[url('/image/hr/hr-kota-dark.svg')]" />
      );
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
        <th className="border border-gray-300 bg-gray-200 px-2 py-1 align-middle font-bold text-blueblack dark:border-gray-700 dark:bg-gray-800 dark:text-blueblack-dark">
          {children}
        </th>
      );
    },
    td: ({ children }) => {
      return (
        <td className="border border-gray-300 p-2 text-blueblack dark:border-gray-700 dark:text-blueblack-dark">
          {children}
        </td>
      );
    },

    p: (props) => {
      const imgNodeResult = judgeAndExtractImgNode(props.children);
      if (imgNodeResult.isImage) {
        return (
          <div className="relative mb-3 flex h-96 max-h-96 w-fit">
            <Image
              src={imgNodeResult.imgNodeData?.src ?? ""}
              alt={imgNodeResult.imgNodeData?.alt ?? ""}
              fill
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" !relative h-full w-auto rounded-sm object-scale-down object-left"
            />
          </div>
        );
      }
      return (
        <p className="mb-3 text-wrap break-words text-base text-blueblack leading-7 dark:text-blueblack-dark">
          {props.children}
        </p>
      );
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
      return (
        <ul className="mb-3 ml-2 list-inside list-disc leading-8 [&_ul]:mb-0 [&_ul]:ml-6 [&_ul]:list-circle [&_ul_ul]:list-square [&_ul_ul_ul]:list-disc">
          {children}
        </ul>
      );
    },
    ol: ({ children }) => {
      return (
        <ol className="mb-3 ml-2 list-inside list-decimal leading-8 [&_ol]:mb-0 [&_ol]:ml-6 [&_ol]:list-lower_alpha [&_ol_ol]:list-lower_roman">
          {children}
        </ol>
      );
    },
    li: ({ children }) => {
      return <li className="text-blueblack leading-8 dark:text-blueblack-dark">{children}</li>;
    },
    blockquote: ({ children }) => {
      return (
        <blockquote className="my-3 border-gray-300 border-l-4 px-2 align-middle dark:border-gray-700">
          <div className="p-2 text-blueblack leading-8 dark:text-blueblack-dark">{children}</div>
        </blockquote>
      );
    },

    pre: (props) => {
      const preNode = props.children;
      const isChildCodeBlock = (() => {
        if (!preNode) return false;
        const children = Array.isArray(preNode) ? preNode : [preNode];
        if (children.length !== 1) return false;
        return children[0].type.name === "code";
      })();

      if (isChildCodeBlock) {
        return <CodeBlock>{preNode}</CodeBlock>;
      }

      return <pre>{preNode}</pre>;
    },

    code: (props) => {
      return (
        <code className="rounded bg-primary/15 p-0.5 text-sm dark:bg-primary-dark/25 dark:text-gray-300">
          {props.children}
        </code>
      );
    },
  };
}
