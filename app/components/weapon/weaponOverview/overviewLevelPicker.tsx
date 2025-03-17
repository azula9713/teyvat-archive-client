import React from "react";

type Props = {
  selectedLevel: number;
  setSelectedLevel: (level: number) => void;
};

export default function OverviewLevelPicker({
  selectedLevel,
  setSelectedLevel,
}: Readonly<Props>) {
  return (
    <div className="flex items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
      {[1, 90].map((level) => (
        <button
          key={level}
          onClick={() => setSelectedLevel(level)}
          className={`flex whitespace-nowrap items-center h-5 px-2 font-medium rounded-lg outline-none focus:ring-2 focus:ring-teal-600 focus:ring-inset ${
            selectedLevel === level
              ? "text-teal-600 shadow bg-white dark:text-white dark:bg-teal-600"
              : "hover:text-gray-800 focus:text-teal-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}
