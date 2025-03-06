type Props = {
  text: string;
  customClass?: string;
};

export default function TitleHeading({
  text,
  customClass = "text-6xl",
}: Readonly<Props>) {
  return <h4 className={customClass}>{text}</h4>;
}
