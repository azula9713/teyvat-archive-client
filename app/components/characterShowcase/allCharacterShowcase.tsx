import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import {
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom,
} from "~/atoms/teyvat/character.atom";
import CharacterThumbnail from "./characterThumbnail";

type Props = {
  characters: IBaseCharacter[];
};

export default function AllCharacterShowcase({ characters }: Readonly<Props>) {
  const selectedCharacterElement = useAtomValue(selectedCharacterElementAtom);
  const selectedCharacterWeapon = useAtomValue(selectedCharacterWeaponAtom);
  const selectedCharacterRarity = useAtomValue(selectedCharacterRarityAtom);

  const [filteredCharacters, setFilteredCharacters] =
    useState<IBaseCharacter[]>(characters);

  useEffect(() => {
    const tempFilteredCharacters = characters.filter(
      (character) =>
        (selectedCharacterElement === "all" ||
          character.element === selectedCharacterElement) &&
        (selectedCharacterWeapon === "all" ||
          character.weaponType === selectedCharacterWeapon) &&
        (selectedCharacterRarity === "all" ||
          character.rarity === selectedCharacterRarity)
    );

    setFilteredCharacters(tempFilteredCharacters);
  }, [
    selectedCharacterElement,
    characters,
    selectedCharacterWeapon,
    selectedCharacterRarity,
  ]);

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
