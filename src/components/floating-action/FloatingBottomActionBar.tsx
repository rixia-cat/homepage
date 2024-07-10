"use client";

import PageUpDownButtons from "@/components/floating-action/PageUpDownButtons";
import { type CSSProperties, useEffect, useMemo, useState } from "react";

const footerHeight = 80;

export default function FloatingBottomActionBar() {
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [remainBottom, setRemainBottom] = useState(0);

  // スクロールイベントの監視
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const tempRemainBottom = scrollHeight - scrollY - clientHeight;
      setRemainBottom(tempRemainBottom);
      const nearBottom = tempRemainBottom < footerHeight;
      if (nearBottom !== isNearBottom) {
        setIsNearBottom(nearBottom);
      }
      setScrollPercentage((scrollY / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNearBottom]);

  const marginHeight = isNearBottom ? footerHeight - remainBottom : 0;
  const floatingActionStyle: CSSProperties = useMemo(() => {
    return {
      marginBottom: marginHeight > 0 ? `${marginHeight}px` : 0,
    };
  }, [marginHeight]);
  return (
    <div className="fixed inset-x-0 right-4 bottom-4 z-floating_action flex justify-end" style={floatingActionStyle}>
      {/* biome-ignore lint/nursery/useSortedClasses: <explanation> */}
      <div className="flex flex-row items-center gap-x-2 rounded-2xl bg-white/35 dark:bg-gray-600/35 border border-gray-800/30 px-2 pt-0.5 pb-1 text-gray-800 backdrop-blur-sm dark:border-gray-700/70">
        {/* <div className="flex flex-col items-center">
        </div>

        <div className="h-full w-px bg-gray-600/75"></div> */}

        <PageUpDownButtons scrollPercentage={scrollPercentage} />
      </div>
    </div>
  );
}
