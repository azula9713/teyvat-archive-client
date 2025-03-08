type Props = {
  title: string;
  customClass?: string;
};

export default function PageTitle({
  title,
  customClass = "my-2 text-3xl xl:text-5xl px-4",
}: Readonly<Props>) {
  return <h1 className={customClass}>{title}</h1>;
}
