import { memo } from "react";

type Props = {
  label: string;
  classNames?: any;
};

function TextLabel({ label, classNames }: Readonly<Props>) {
  return (
    <label
      className={`font-bold tracking-wide text-sm text-[#c4c4c4] xl:text-gray-200 xl:text-md leading-4 font-enka ${classNames}`}
    >
      {label}
    </label>
  );
}

export default memo(TextLabel);
