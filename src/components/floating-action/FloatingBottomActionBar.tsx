"use client";

import PageUpDownButtons from "@/components/floating-action/PageUpDownButtons";
import { useEffect, useState } from "react";

export default function FloatingBottomActionBar() {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollPositions = () => {
      setViewportHeight(window.innerHeight);
      setScrollHeight(document.body.scrollHeight);
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", updateScrollPositions);
    window.addEventListener("scroll", updateScrollPositions);

    return () => {
      window.removeEventListener("resize", updateScrollPositions);
      window.removeEventListener("scroll", updateScrollPositions);
    };
  }, []);

  const scrollPercentage = Math.round((scrollY / (scrollHeight - viewportHeight)) * 100);
  const cappedScrollPercentage = Math.max(0, Math.min(100, scrollPercentage));

  return (
    <div className="sticky inset-x-0 right-0 bottom-0 z-floating_action flex justify-end pr-2 pb-2">
      {/* biome-ignore lint/nursery/useSortedClasses: <explanation> */}
      <div className="flex flex-row items-center gap-x-2 rounded-2xl bg-white/35 dark:bg-gray-600/35 border border-gray-800/30 px-2 pt-0.5 pb-1 text-gray-800 backdrop-blur-sm dark:border-gray-700/70">
        {/* <div className="flex flex-col items-center">
        </div>

        <div className="h-full w-px bg-gray-600/75"></div> */}

        <PageUpDownButtons scrollPercentage={cappedScrollPercentage} />
      </div>
    </div>
  );
}
