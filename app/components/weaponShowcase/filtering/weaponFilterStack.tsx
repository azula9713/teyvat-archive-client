import { BackspaceIcon } from "@heroicons/react/16/solid";

import RarityFilter from "~/components/common/filters/rarityFilter";
import WeaponFilter from "~/components/common/filters/weaponFilter";
import WeaponSeriesFilter from "./weaponSeriesFilter";

type Props = {
  setIsFilterOpen: (value: boolean) => void;
  selectedWeaponType: string;
  setSelectedWeaponType: (weaponType: string) => void;
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  selectedSeries: string;
  setSelectedSeries: (series: string) => void;
  weaponSeries: IBaseWeaponSeries;
};

export default function WeaponFilterStack({
  setIsFilterOpen,
  selectedWeaponType,
  setSelectedWeaponType,
  selectedRarity,
  setSelectedRarity,
  selectedSeries,
  setSelectedSeries,
  weaponSeries,
}: Props) {
  const seriesOptions = Object.keys(weaponSeries).map((series) => ({
    value: series,
    label: series,
    itemCount: weaponSeries[series].length,
  }));

  return (
    <>
      <WeaponFilter
        selectedWeapon={selectedWeaponType}
        setSelectedWeapon={setSelectedWeaponType}
      />
      <RarityFilter
        selectedRarity={selectedRarity}
        setSelectedRarity={setSelectedRarity}
      />

      <WeaponSeriesFilter
        series={seriesOptions}
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
      />

      <button
        className="w-full lg:w-auto p-2 mb-3 max-w-[300px] cursor-pointer rounded-lg h-[40px] text-xs hover:bg-slate-700 text-white flex items-center"
        onClick={() => {
          setSelectedWeaponType("all");
          setSelectedRarity("all");
          setSelectedSeries("all");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <BackspaceIcon className="size-4 ml-2" />
      </button>
    </>
  );
}
