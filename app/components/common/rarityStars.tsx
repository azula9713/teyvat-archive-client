import { StarIcon } from "@heroicons/react/16/solid";

type Props = {
  stars: number;
};

export default function RarityStars({ stars }: Readonly<Props>) {
  return (
    <div className="flex w-max justify-start items-center">
      {Array(stars)
        .fill("")
        .map((_, i) => (
          <StarIcon
            className="size-3 lg:w-4 lg:h-4 xl:h-6 xl:w-6 text-[gold]"
            key={`star-${i + 1}`}
          />
        ))}
    </div>
  );
}
