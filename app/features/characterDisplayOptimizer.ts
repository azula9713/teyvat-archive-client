import { atom } from "jotai";
import { useFilterTravelersAtom } from "~/atoms/feature.atoms";

const useFilterTravelers = atom((get) => get(useFilterTravelersAtom));

const ELEMENT_BASED_TRAVELERS_INVERT = {
  anemo: "PlayerGirl",
  geo: "PlayerGirl",
  electro: "PlayerGirl",
  dendro: "PlayerGirl",
  hydro: "PlayerGirl",
  pyro: "PlayerGirl",
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
