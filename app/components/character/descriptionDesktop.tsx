type Props = {
  description: string;
};

export default function DescriptionDesktop({ description }: Readonly<Props>) {
  return (
    <p className="mt-6 text-xl leading-6 tracking-wide text-white w-2/3 italic">
      "
      {description?.split(" ").length > 100 ? (
        <span>
          {description?.split(" ").slice(0, 100).join(" ")}...
          <span className="text-blue-500">Read More</span>
        </span>
      ) : (
        description
      )}
      "
    </p>
  );
}
