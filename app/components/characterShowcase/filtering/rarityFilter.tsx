import { memo } from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

import { RARITIES } from "~/data/teyvatData";
import ItemSeparator from "./itemSeparator";

type Props = {
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
};

function RarityFilter({ selectedRarity, setSelectedRarity }: Readonly<Props>) {
  return (
    <div className="w-full lg:w-max flex items-center justify-between p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg h-[40px]">
      <button
        className="inline-flex items-center justify-center w-full rounded-md text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer mx-2"
        onClick={() => {
          if (selectedRarity === RARITIES[0]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[0]);
          }
        }}
      >
        4
        {selectedRarity === RARITIES[0] || selectedRarity === "all" ? (
          <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
        ) : (
          <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
        )}
      </button>

      <ItemSeparator />

      <button
        className="inline-flex items-center justify-center w-full rounded-md text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer mx-2"
        onClick={() => {
          if (selectedRarity === RARITIES[1]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[1]);
          }
        }}
      >
        5{/* <RarityStars stars={1} /> */}
        {selectedRarity === RARITIES[1] || selectedRarity === "all" ? (
          <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
        ) : (
          <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
        )}
      </button>

      <ItemSeparator />

      <button
        className="inline-flex items-center justify-center w-full rounded-md text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer mx-2"
        onClick={() => {
          if (selectedRarity === RARITIES[2]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[2]);
          }
        }}
      >
        5{/* <RarityStars stars={1} /> */}
        SP
        {selectedRarity === RARITIES[2] || selectedRarity === "all" ? (
          <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
        ) : (
          <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
        )}
      </button>
    </div>
  );
}

export default memo(RarityFilter);
