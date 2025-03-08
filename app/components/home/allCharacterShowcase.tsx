import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import {
  selectedElementAtom,
  selectedRarityAtom,
  selectedWeaponAtom,
} from "~/atoms/teyvat.atom";
import type { IBaseCharacter } from "~/types/enka.types";
import CharacterThumbnail from "./characterThumbnail";

type Props = {
  characters: IBaseCharacter[];
};

export default function AllCharacterShowcase({ characters }: Readonly<Props>) {
  const selectedElement = useAtomValue(selectedElementAtom);
  const selectedWeapon = useAtomValue(selectedWeaponAtom);
  const selectedRarity = useAtomValue(selectedRarityAtom);

  const [filteredCharacters, setFilteredCharacters] =
    useState<IBaseCharacter[]>(characters);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(
        (character) =>
          (selectedElement === "all" ||
            character.element === selectedElement) &&
          (selectedWeapon === "all" ||
            character.weaponType === selectedWeapon) &&
          (selectedRarity === "all" || character.rarity === selectedRarity)
      )
    );
  }, [selectedElement, characters, selectedWeapon, selectedRarity]);

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
        {filteredCharacters.map((character) => (
          <CharacterThumbnail character={character} key={character.id} />
        ))}
      </motion.div>
    </div>
  );
}
