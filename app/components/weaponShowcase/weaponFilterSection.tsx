import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import { useAtom } from "jotai";
import { useState } from "react";
import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
} from "~/atoms/teyvat/weapon.atom";
import weaponIconFilter from "~/utils/weaponIconFilter";
import WeaponFilterStack from "./filtering/weaponFilterStack";

type Props = {
  weaponSeries: IBaseWeaponSeries;
};

export default function WeaponFilterSection({ weaponSeries }: Props) {
  const [selectedWeaponType, setSelectedWeaponType] = useAtom(
    selectedWeaponTypeAtom
  );
  const [selectedWeaponRarity, setSelectedWeaponRarity] = useAtom(
    selectedWeaponRarityAtom
  );
  const [selectedSeries, setSelectedSeries] = useAtom(selectedWeaponSeriesAtom);

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
              {/* {selectedCharacterElement !== "all" && (
                <img
                  src={elementalImageFilter[selectedCharacterElement]}
                  alt={selectedCharacterElement}
                  className="w-[24px]"
                />
              )} */}

              {selectedWeaponType !== "all" && (
                <img
                  src={
                    weaponIconFilter[
                      selectedWeaponType as keyof typeof weaponIconFilter
                    ]
                  }
                  alt={selectedWeaponType}
                  className="w-[26px]"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              )}

              {/* {selectedCharacterRarity !== "all" && (
                <div className="flex items-center">
                  {selectedCharacterRarity === RARITIES[0]
                    ? "4"
                    : selectedCharacterElement === RARITIES[1]
                    ? "5"
                    : "5SP"}
                  <StarIcon className="size-4 text-[gold]" />
                </div>
              )} */}
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
            <WeaponFilterStack
              setIsFilterOpen={setIsFilterOpen}
              selectedWeaponType={selectedWeaponType}
              setSelectedWeaponType={setSelectedWeaponType}
              selectedRarity={selectedWeaponRarity}
              setSelectedRarity={setSelectedWeaponRarity}
              selectedSeries={selectedSeries}
              setSelectedSeries={setSelectedSeries}
              weaponSeries={weaponSeries}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        <WeaponFilterStack
          setIsFilterOpen={setIsFilterOpen}
          selectedWeaponType={selectedWeaponType}
          setSelectedWeaponType={setSelectedWeaponType}
          selectedRarity={selectedWeaponRarity}
          setSelectedRarity={setSelectedWeaponRarity}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          weaponSeries={weaponSeries}
        />
      </div>
    </div>
  );
}
