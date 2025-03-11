import React from "react";

type Props = {
  value: boolean;
  setValue: (value: boolean) => void;
  id: string;
  label: string;
};

export default function ToggleItem({ value, setValue, id, label }: Props) {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
          className="hidden"
        />
        <button
          className={`w-12 h-6 flex items-center justify-between p-1 rounded-full cursor-pointer transition-all duration-300 ${
            value ? "bg-teal-500" : "bg-gray-300"
          }`}
          onClick={() => setValue(!value)}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${
              value ? "transform translate-x-6" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
