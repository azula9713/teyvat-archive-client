type Props = {
  text: string;
};

export default function AboutParagraph({ text }: Readonly<Props>) {
  return <p className="text-white text-md lg:text-lg mt-1">{text}</p>;
}
