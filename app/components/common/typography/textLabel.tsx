type Props = {
  label: string;
  classNames?: any;
};

export default function TextLabel({ label, classNames }: Readonly<Props>) {
  return (
    <label
      className={`font-bold tracking-wide text-sm text-[#c4c4c4] xl:text-gray-200 xl:text-md leading-4 ${classNames}`}
    >
      {label}
    </label>
  );
}
