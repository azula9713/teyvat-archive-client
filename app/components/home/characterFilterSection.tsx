import { useAtom } from "jotai";
import {
  selectedElementAtom,
  selectedRarityAtom,
  selectedWeaponAtom,
} from "~/atoms/teyvat.atom";
import ElementFilter from "./filtering/elementFilter";
import WeaponFilter from "./filtering/weaponFilter";

export default function CharacterFilterSection() {
  const [selectedElement, setSelectedElement] = useAtom(selectedElementAtom);
  const [selectedWeapon, setSelectedWeapon] = useAtom(selectedWeaponAtom);
  const [selectedRarity, setSelectedRarity] = useAtom(selectedRarityAtom);

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
      {/* create a dropdown of elements for mobile version */}

      <ElementFilter
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      <WeaponFilter
        selectedWeapon={selectedWeapon}
        setSelectedWeapon={setSelectedWeapon}
      />
    </div>
  );
}
