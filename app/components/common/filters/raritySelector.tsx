import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

import { RARITIES } from "~/data/teyvatData";

type Props = {
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  rarityIndex: number;
};

export default function RaritySelector({
  selectedRarity,
  setSelectedRarity,
  rarityIndex,
}: Readonly<Props>) {
  return (
    <div className="flex items-center justify-center w-full">
      <button
        className="cursor-pointer text-sm mx-2 flex items-center"
        onClick={() => {
          if (selectedRarity === RARITIES[rarityIndex]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[rarityIndex]);
          }
        }}
      >
        {rarityIndex + 1 > 5 ? "5SP" : rarityIndex + 1}
        {selectedRarity === RARITIES[rarityIndex] ||
        selectedRarity === "all" ? (
          <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
        ) : (
          <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
        )}
      </button>
    </div>
  );
}
