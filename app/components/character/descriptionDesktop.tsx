type Props = {
  description: string;
};

export default function DescriptionDesktop({ description }: Readonly<Props>) {
  return (
    <p
      className="mt-6 text-xl leading-6 tracking-wide text-white w-2/3 italic"
      style={{
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.9)",
      }}
    >
      "{description}"
    </p>
  );
}
