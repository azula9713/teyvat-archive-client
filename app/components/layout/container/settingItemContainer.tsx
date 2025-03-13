import React from "react";

type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  label: string;
  description?: string;
  id: string;
};

export default function SettingItemContainer({
  children,
  id,
  isDisabled,
  label,
  description,
}: Props) {
  return (
    <div className="w-full flex items-center justify-between border border-slate-700 p-4 rounded-xl">
      <div className="flex flex-col items-start justify-between">
        <label
          htmlFor={id}
          className={`${isDisabled ? "text-gray-400" : "text-white"}`}
        >
          {label}
        </label>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
