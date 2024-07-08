import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import styles from "./ArticleMarkdown.module.css"; // ネスト要素などに対応するため一部スタイルは別途定義
import { articleMarkdownComponents } from "./markdown-components";

// #region next-mdx-remote
const components = articleMarkdownComponents({});
const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
};
// #endregion

type ArticleMarkdownProps = {
  blogBodyMarkdown: string;
};

export default function ArticleMarkdown({ blogBodyMarkdown }: ArticleMarkdownProps) {
  return (
    <div className={styles.articleContainer}>
      <MDXRemote source={blogBodyMarkdown} components={components} options={options} />
    </div>
  );
}
