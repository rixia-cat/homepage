import Markdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { PluggableList } from "unified";
// ネスト要素などに対応するため一部スタイルは別途定義
import styles from "./ArticleMarkdown.module.css";
import { articleMarkdownComponents } from "./markdown-components";

// #region react-markdown
const components = articleMarkdownComponents({});
const remarkPlugins: PluggableList = [remarkGfm];
const rehypePlugins: PluggableList = [rehypeSlug, rehypeAutolinkHeadings];
// #endregion

type ArticleMarkdownProps = {
  blogBodyMarkdown: string;
};

export default function ArticleMarkdown({ blogBodyMarkdown }: ArticleMarkdownProps) {
  return (
    <div className={styles.articleContainer}>
      <Markdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
        {blogBodyMarkdown}
      </Markdown>
    </div>
  );
}
