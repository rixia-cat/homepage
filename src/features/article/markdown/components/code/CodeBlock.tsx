import type { ReactElement, ReactNode } from "react";
import { codeToHtml } from "shiki";
import styles from "./CodeBlock.module.css";

type ExtractedReactNodeData = {
  text: string;
  className: string;
};

type ReactElementWithProps = ReactElement & {
  props: {
    className: string;
    children: ReactNode;
  };
};

function extractReactNode(node: ReactNode): ExtractedReactNodeData {
  if (typeof node === "object" && node !== null && "props" in node) {
    const element = node as ReactElementWithProps;
    if (typeof element.props.children === "string" || typeof element.props.children === "number") {
      return {
        text: String(element.props.children),
        className: element.props.className,
      };
    }
  }
  return {
    text: "",
    className: "",
  };
}

function judgeCodeLang(className: string) {
  if (!className) return "plaintext";

  if (className.startsWith("language-")) {
    return className.replace("language-", "");
  }
  return "plaintext";
}

export default async function CodeBlock({ children }: { children: ReactNode }) {
  /* 以下のように渡ってくる */
  //   {
  //   '$$typeof': Symbol(react.element),
  //   type: [Function: code],
  //   key: null,
  //   ref: null,
  //   props: {
  //     className: 'language-ts',
  //     children: '// 言語指定あり\nconsole.log("test-text-dayo-");\n'
  //   },
  //   _owner: null,
  //   _store: {}
  // }

  const extractedData = extractReactNode(children);
  const codeLang = judgeCodeLang(extractedData.className);

  const html = await codeToHtml(extractedData.text, {
    lang: codeLang,
    theme: "one-dark-pro",
  });
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtmlWithChildren: <explanation>
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    <div className={styles.codeBlockContainer} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
