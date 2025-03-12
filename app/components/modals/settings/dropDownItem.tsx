type Props = {
  value: string;
  setValue: (value: string) => void;
  id: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  description?: string;
  isDisabled?: boolean;
};

export default function DropdownItem({
  value,
  setValue,
  id,
  label,
  options,
  description,
  isDisabled = false,
}: Readonly<Props>) {
  return (
    <div className="flex flex-row items-center justify-between w-full border border-slate-700 p-4 rounded-xl">
      <div
        className={`flex flex-col items-start justify-between w-full ${
          isDisabled ? "opacity-50" : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <div>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
      </div>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full px-4 mr-2 py-1 bg-slate-800 border text-sm border-slate-600 rounded-md shadow-sm focus:outline-none"
          disabled={isDisabled}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-slate-800 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
