import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import AllCharacterShowcase from "~/components/characterShowcase/allCharacterShowcase";
import CharacterFilterSection from "~/components/characterShowcase/filtering/characterFilterSection";
import PageTitle from "~/components/common/typography/pageTitle";
import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";
import {
  useFilterTravelersAtom,
  useSelectedTravelerAtom,
} from "~/atoms/feature.atoms";
import filterCharacters from "~/features/characterDisplayOptimizer";
import type { Route } from "./+types/characters";

export async function loader() {
  const characters: IBaseCharacter[] = await getCharacters();

  return { characters };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function meta() {
  return [
    { title: `Teyvat Archive - Characters` },
    { name: "description", content: "Welcome to Teyvat Archive!" },
  ];
}

export default function Characters({
  loaderData,
}: Readonly<Route.ComponentProps>) {
  const { characters } = loaderData;

  const [useFilterTravelers] = useAtom(useFilterTravelersAtom);
  const [useSelectedTraveler] = useAtom(useSelectedTravelerAtom);

  const [filteredCharacters, setFilteredCharacters] =
    useState<IBaseCharacter[]>(characters);

  useEffect(() => {
    if (useFilterTravelers) {
      setFilteredCharacters(filterCharacters(characters, useSelectedTraveler));
    } else {
      setFilteredCharacters(characters);
    }
  }, [characters, useFilterTravelers, useSelectedTraveler]);

  return (
    <>
      <div className="sticky top-0 z-10 bg-gray-900 w-full">
        <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
          <PageTitle title="Teyvat Characters" />
        </div>
        <CharacterFilterSection />
      </div>
      <AllCharacterShowcase characters={filteredCharacters} />
    </>
  );
}
