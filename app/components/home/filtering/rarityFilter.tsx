import { memo } from "react";
import RarityStars from "~/components/character/rarityStars";
import { RARITIES } from "~/data/teyvatData";

type Props = {
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
};

function RarityFilter({ selectedRarity, setSelectedRarity }: Readonly<Props>) {
  return (
    <div className="w-full flex items-center justify-between space-x-2 p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg">
      <button
        className={`${
          selectedRarity === RARITIES[0]
            ? "bg-slate-600 text-slate-300 shadow-xs"
            : "text-slate-300"
        } inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer`}
        onClick={() => {
          if (selectedRarity === RARITIES[0]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[0]);
          }
        }}
      >
        4
        <RarityStars stars={1} />
      </button>

      <button
        className={`${
          selectedRarity === RARITIES[1]
            ? "bg-slate-600 text-slate-300 shadow-xs"
            : "text-slate-300"
        } inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer`}
        onClick={() => {
          if (selectedRarity === RARITIES[1]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[1]);
          }
        }}
      >
        5
        <RarityStars stars={1} />
      </button>
      <button
        className={`${
          selectedRarity === RARITIES[2]
            ? "bg-slate-600 text-slate-300 shadow-xs"
            : "text-slate-300"
        } inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer`}
        onClick={() => {
          if (selectedRarity === RARITIES[2]) {
            setSelectedRarity("all");
          } else {
            setSelectedRarity(RARITIES[2]);
          }
        }}
      >
        5
        <RarityStars stars={1} />
        SP
      </button>
    </div>
  );
}

export default memo(RarityFilter);
