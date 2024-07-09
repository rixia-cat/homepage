"use client";

import PageUpDownButtons from "@/components/floating-action/PageUpDownButtons";
import { useEffect, useState } from "react";

export default function FloatingBottomActionBar() {
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // スクロールイベントの監視
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const nearBottom = scrollHeight - scrollY - clientHeight < 80;
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

  return (
    <div className={`fixed inset-x-0 bottom-2 z-floating_action flex justify-center ${isNearBottom ? "hidden" : ""}`}>
      <div className="flex flex-row items-center gap-x-2 rounded-2xl border border-gray-800/30 px-2 pt-0.5 pb-1 text-gray-800 backdrop-blur-sm dark:border-gray-700/70">
        {/* <div className="flex flex-col items-center">
        </div>

        <div className="h-full w-px bg-gray-600/75"></div> */}

        <PageUpDownButtons scrollPercentage={scrollPercentage} />
      </div>
    </div>
  );
}
