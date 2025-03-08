import { useState } from "react";
import { useAtom } from "jotai";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

import {
  selectedElementAtom,
  selectedRarityAtom,
  selectedWeaponAtom,
} from "~/atoms/teyvat.atom";
import elementalImageFilter from "~/utils/elementalImagePicker";
import weaponIconFilter from "~/utils/weaponIconFilter";
import { RARITIES } from "~/data/teyvatData";
import FilterStack from "./filtering/filterStack";

export default function CharacterFilterSection() {
  const [selectedElement, setSelectedElement] = useAtom(selectedElementAtom);
  const [selectedWeapon, setSelectedWeapon] = useAtom(selectedWeaponAtom);
  const [selectedRarity, setSelectedRarity] = useAtom(selectedRarityAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
      <div className="relative lg:hidden w-full max-w-[320px]">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900 w-full">
          <div className="border-e w-full px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center justify-start">
            <div className="flex items-center">
              <p>Filters</p>
              <AdjustmentsHorizontalIcon className="size-4 ml-2" />
            </div>

            <div className="flex items-center w-full space-x-1 justify-end">
              {selectedElement !== "all" && (
                <img
                  src={elementalImageFilter[selectedElement]}
                  alt={selectedElement}
                  className="w-[24px]"
                />
              )}

              {selectedWeapon !== "all" && (
                <img
                  src={
                    weaponIconFilter[
                      selectedWeapon as keyof typeof weaponIconFilter
                    ]
                  }
                  alt={selectedWeapon}
                  className="w-[26px]"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              )}

              {selectedRarity !== "all" && (
                <div className="flex items-center">
                  {selectedRarity === RARITIES[0]
                    ? "4"
                    : selectedElement === RARITIES[1]
                    ? "5"
                    : "5SP"}
                  <StarIcon className="size-4 text-[gold]" />
                </div>
              )}
            </div>
          </div>

          <button
            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? (
              <ChevronUpIcon className="size-4" />
            ) : (
              <ChevronDownIcon className="size-4" />
            )}
          </button>
        </div>

        {isFilterOpen && (
          <div className="absolute flex flex-col items-center justify-evenly pt-4 end-0 z-10 w-full rounded-md border border-gray-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <FilterStack
              setIsFilterOpen={setIsFilterOpen}
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
              selectedWeapon={selectedWeapon}
              setSelectedWeapon={setSelectedWeapon}
              selectedRarity={selectedRarity}
              setSelectedRarity={setSelectedRarity}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        <FilterStack
          setIsFilterOpen={setIsFilterOpen}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          selectedWeapon={selectedWeapon}
          setSelectedWeapon={setSelectedWeapon}
          selectedRarity={selectedRarity}
          setSelectedRarity={setSelectedRarity}
        />
      </div>
    </div>
  );
}
