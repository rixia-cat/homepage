import type { ReactNode } from "react";

export default function CodeBlock({ children }: { children: ReactNode }) {
  return <code className="text-sm">{children}</code>;
}
