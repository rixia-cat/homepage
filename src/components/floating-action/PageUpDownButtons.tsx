"use client";

import { CaretDoubleDown, CaretDoubleUp } from "@phosphor-icons/react";

type PageUpDownButtonsProps = {
  scrollPercentage: number;
};

export default function PageUpDownButtons({ scrollPercentage }: PageUpDownButtonsProps) {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const moveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const percentageStr = `${Math.round(scrollPercentage)}%`;

  return (
    <div className="flex flex-col">
      <span className="pb-[2px] text-center text-[8px] text-gray-600 dark:text-gray-400/55">
        スクロール:<span className="inline-flex w-4">{percentageStr}</span>
      </span>

      <div className="flex flex-row items-center gap-x-2 ">
        <button
          title="ページの先頭へ移動"
          type="button"
          className=" rounded-full border border-gray-600/65 p-2 ease-in-out hover:scale-110"
          onClick={moveToTop}
        >
          <CaretDoubleUp size="1rem" className="text-gray-700 dark:text-gray-300/75" />
        </button>

        <div className="h-6 w-px bg-gray-600/75" />

        <button
          title="ページの末尾へ移動"
          type="button"
          className="rounded-full border border-gray-600/65 p-2 ease-in-out hover:scale-110"
          onClick={moveToBottom}
        >
          <CaretDoubleDown size="1rem" className="text-gray-700 dark:text-gray-300/75" />
        </button>
      </div>
    </div>
  );
}
