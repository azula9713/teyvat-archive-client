import { motion } from "framer-motion";
import WeaponThumbnail from "./weaponThumbnail";
import { useEffect, useState } from "react";
import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
} from "~/atoms/teyvat/weapon.atom";
import { useAtomValue } from "jotai";
import rarityParser from "~/utils/parsers/rarityParser";

type Props = {
  weapons: IBasicWeapon[];
};

export default function AllWeaponShowcase({ weapons }: Props) {
  const selectedWeaponType = useAtomValue(selectedWeaponTypeAtom);
  const selectedWeaponRarity = useAtomValue(selectedWeaponRarityAtom);
  const selectedWeaponSeries = useAtomValue(selectedWeaponSeriesAtom);

  const [filteredWeapons, setFilteredWeapons] =
    useState<IBasicWeapon[]>(weapons);

  useEffect(() => {
    const tempFilteredWeapons = weapons.filter(
      (weapon) =>
        (selectedWeaponType === "all" ||
          weapon.weaponType === selectedWeaponType) &&
        (selectedWeaponRarity === "all" ||
          rarityParser(weapon.stars) === selectedWeaponRarity) &&
        (selectedWeaponSeries === "all" ||
          weapon.series === selectedWeaponSeries)
    );

    setFilteredWeapons(tempFilteredWeapons.sort((a, b) => a.stars - b.stars));
  }, [weapons, selectedWeaponType, selectedWeaponRarity, selectedWeaponSeries]);

  return (
    <div className="overflow-hidden w-full items-center justify-center flex px-4 md:px-12">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="mt-2 grid auto-cols-fr grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 overflow-y-auto"
        style={{
          maxHeight: "calc(100vh - 300px)",
        }}
      >
        {filteredWeapons.map((weapon) => (
          <WeaponThumbnail weapon={weapon} key={weapon.id} />
        ))}
      </motion.div>
    </div>
  );
}
