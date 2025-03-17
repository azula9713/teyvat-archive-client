import { memo } from "react";

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
