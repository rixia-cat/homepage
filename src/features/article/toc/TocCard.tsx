"use client";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";
import tocbot from "tocbot";

const headerHeight = 64;

export default function TocCard() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".article-body",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -headerHeight,
      scrollSmooth: true,
      scrollSmoothDuration: 100,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="flex h-72 w-full flex-col overflow-hidden rounded-2xl border border-card_border bg-card_background dark:border-card_border-dark dark:bg-card_background-dark">
      <div className="p-3 pb-1">
        <div className=" flex w-full flex-row flex-nowrap items-center border-gray-400 border-b border-dashed pb-2 align-middle dark:border-gray-500">
          <div className="flex flex-row flex-nowrap items-center ">
            <BookOpenText className="mr-1.5" size="1.75rem" />
            <p className="line-clamp-2 font-bold text-blueblack text-lg dark:text-blueblack-dark">目次</p>
          </div>
        </div>
      </div>
      <div className="toc h-full w-full overflow-y-auto px-3 pt-2 pb-3 text-blueblack text-sm dark:text-blueblack-dark [&_li_ol]:mt-1 [&_ol]:list-inside [&_ol]:list-disc [&_ol_li]:mt-1 [&_ol_ol]:ml-5 [&_ol_ol]:list-circle" />
    </div>
  );
}
