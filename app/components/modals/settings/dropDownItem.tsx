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
}: Readonly<Props>) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id}>{label}</label>
        <div className="relative">
          <select
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
