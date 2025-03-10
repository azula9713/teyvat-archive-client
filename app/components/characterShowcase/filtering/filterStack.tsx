import { BackspaceIcon } from "@heroicons/react/16/solid";

import ElementFilter from "./elementFilter";
import RarityFilter from "./rarityFilter";
import WeaponFilter from "./weaponFilter";

type Props = {
  setIsFilterOpen: (value: boolean) => void;
  selectedElement: string;
  setSelectedElement: (element: string) => void;
  selectedWeapon: string;
  setSelectedWeapon: (weapon: string) => void;
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
};

export default function FilterStack({
  setIsFilterOpen,
  selectedElement,
  setSelectedElement,
  selectedWeapon,
  setSelectedWeapon,
  selectedRarity,
  setSelectedRarity,
}: Readonly<Props>) {
  return (
    <>
      <ElementFilter
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      <WeaponFilter
        selectedWeapon={selectedWeapon}
        setSelectedWeapon={setSelectedWeapon}
      />
      <RarityFilter
        selectedRarity={selectedRarity}
        setSelectedRarity={setSelectedRarity}
      />
      <button
        className="w-full lg:w-auto p-2 mb-3 max-w-[300px] cursor-pointer rounded-lg h-[40px] text-xs hover:bg-slate-700 text-white flex items-center"
        onClick={() => {
          setSelectedElement("all");
          setSelectedWeapon("all");
          setSelectedRarity("all");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <BackspaceIcon className="size-4 ml-2" />
      </button>
    </>
  );
}
