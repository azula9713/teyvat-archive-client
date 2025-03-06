type Props = {
  value: string;
};

export default function MobileItemHeading({ value }: Readonly<Props>) {
  return (
    <h5 className="font-bold text-sm text-slate-400 uppercase">{value}</h5>
  );
}
