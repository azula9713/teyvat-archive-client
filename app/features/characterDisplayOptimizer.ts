import { atom } from "jotai";
import { useFilterTravelersAtom } from "~/atoms/feature.atoms";
import type { IBaseCharacter } from "~/types/enka.types";

const useFilterTravelers = atom((get) => get(useFilterTravelersAtom));

const ELEMENT_BASED_TRAVELERS_INVERT = {
  anemo: "PlayerGirl",
  geo: "PlayerBoy",
  electro: "PlayerGirl",
  dendro: "PlayerBoy",
  hydro: "PlayerGirl",
  pyro: "PlayerBoy",
};

const filterCharacters = (characters: IBaseCharacter[]) => {
  if (useFilterTravelers) {
    return characters.filter(
      (character) =>
        character.nameId !==
        ELEMENT_BASED_TRAVELERS_INVERT[
          character.element.toLowerCase() as keyof typeof ELEMENT_BASED_TRAVELERS_INVERT
        ]
    );
  } else {
    return characters;
  }
};

export default filterCharacters;
