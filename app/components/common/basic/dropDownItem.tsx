import SettingItemContainer from "~/components/layout/container/settingItemContainer";

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
    <SettingItemContainer
      id={id}
      label={label}
      description={description}
      isDisabled={isDisabled}
    >
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
    </SettingItemContainer>
  );
}
