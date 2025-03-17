import { memo } from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

import { RARITIES } from "~/data/teyvatData";
import ItemSeparator from "../../characterShowcase/filtering/itemSeparator";
import RaritySelector from "./raritySelector";

type Props = {
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  isCharacter?: boolean;
};

function RarityFilter({
  selectedRarity,
  setSelectedRarity,
  isCharacter = false,
}: Readonly<Props>) {
  return (
    <div className="w-full font-semibold lg:w-max max-w-[300px] flex items-center justify-center p-2 mb-3 border-2 border-slate-600 rounded-lg h-[40px]">
      {!isCharacter && (
        <>
          <RaritySelector
            selectedRarity={selectedRarity}
            setSelectedRarity={setSelectedRarity}
            rarityIndex={0}
          />
          <ItemSeparator />

          <RaritySelector
            selectedRarity={selectedRarity}
            setSelectedRarity={setSelectedRarity}
            rarityIndex={1}
          />
          <ItemSeparator />

          <RaritySelector
            selectedRarity={selectedRarity}
            setSelectedRarity={setSelectedRarity}
            rarityIndex={2}
          />
          <ItemSeparator />
        </>
      )}

      <RaritySelector
        selectedRarity={selectedRarity}
        setSelectedRarity={setSelectedRarity}
        rarityIndex={3}
      />
      <ItemSeparator />
      {/* <div className="flex items-center justify-center w-full">
        <button
          className="cursor-pointer text-sm mx-2 flex items-center"
          onClick={() => {
            if (selectedRarity === RARITIES[4]) {
              setSelectedRarity("all");
            } else {
              setSelectedRarity(RARITIES[4]);
            }
          }}
        >
          5
          {selectedRarity === (RARITIES[4] || RARITIES[5]) ||
          selectedRarity === "all" ? (
            <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
          ) : (
            <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
          )}
        </button>
      </div> */}
      <RaritySelector
        selectedRarity={selectedRarity}
        setSelectedRarity={setSelectedRarity}
        rarityIndex={4}
      />
      {isCharacter && <ItemSeparator />}

      {isCharacter && (
        <RaritySelector
          selectedRarity={selectedRarity}
          setSelectedRarity={setSelectedRarity}
          rarityIndex={5}
        />
      )}
    </div>
  );
}

export default memo(RarityFilter);
