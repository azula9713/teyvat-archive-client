import { useAtom } from "jotai";
import {
  selectedElementAtom,
  selectedRarityAtom,
  selectedWeaponAtom,
} from "~/atoms/teyvat.atom";
import ElementFilter from "./filtering/elementFilter";
import RarityFilter from "./filtering/rarityFilter";
import WeaponFilter from "./filtering/weaponFilter";

export default function CharacterFilterSection() {
  const [selectedElement, setSelectedElement] = useAtom(selectedElementAtom);
  const [selectedWeapon, setSelectedWeapon] = useAtom(selectedWeaponAtom);
  const [selectedRarity, setSelectedRarity] = useAtom(selectedRarityAtom);

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
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
    </div>
  );
}
