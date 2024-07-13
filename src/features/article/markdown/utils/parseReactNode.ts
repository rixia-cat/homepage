import type { ReactNode } from "react";

type ImgNodeData = {
  src: string;
  alt: string;
};
export function judgeAndExtractImgNode(node: ReactNode): { isImage: boolean; imgNodeData: ImgNodeData | null } {
  const falsyData = { isImage: false, imgNodeData: null };
  if (!node) return falsyData;

  const children = Array.isArray(node) ? node : [node];
  if (children.length !== 1) return falsyData;

  const imgNode = children[0];
  if (imgNode.type !== "img") return falsyData;

  const src = imgNode.props.src;
  if (typeof src !== "string") return falsyData;

  const httpsAddedSrc = src.startsWith("https://") ? src : `https:${src}`;

  return { isImage: true, imgNodeData: { src: httpsAddedSrc, alt: imgNode.props.alt } };
}
