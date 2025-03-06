import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import { selectedElementAtom } from "~/atoms/teyvat.atom";
import type { IBaseCharacter } from "~/types/enka.types";
import CharacterThumbnail from "./characterThumbnail";

type Props = {
  characters: IBaseCharacter[];
};

export default function AllCharacterShowcase({ characters }: Readonly<Props>) {
  const selectedElement = useAtomValue(selectedElementAtom);

  const [filteredCharacters, setFilteredCharacters] =
    useState<IBaseCharacter[]>(characters);

  useEffect(() => {
    if (selectedElement === "all") {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(
        characters.filter((character) => character.element === selectedElement)
      );
    }
  }, [selectedElement, characters]);

  return (
    <div className="overflow-hidden w-full items-center justify-center flex px-4 md:px-12">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="mt-2 grid auto-cols-fr grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {filteredCharacters.map((character) => (
          <CharacterThumbnail character={character} key={character.id} />
        ))}
      </motion.div>
    </div>
  );
}
