import AllCharacterShowcase from "~/components/characterShowcase/allCharacterShowcase";
import CharacterFilterSection from "~/components/characterShowcase/characterFilterSection";
import PageTitle from "~/components/common/typography/pageTitle";
import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useFilterTravelersAtom } from "~/atoms/feature.atoms";
import filterCharacters from "~/features/characterDisplayOptimizer";
import type { Route } from "./+types/characters";

export async function loader({ request }: Readonly<Route.LoaderArgs>) {
  const characters: IBaseCharacter[] = await getCharacters();

  return { characters };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function meta() {
  return [
    { title: `Character Archive` },
    { name: "description", content: "Welcome to Teyvat Archive!" },
  ];
}

export default function Characters({
  loaderData,
}: Readonly<Route.ComponentProps>) {
  const { characters } = loaderData;

  const [useFilterTravelers] = useAtom(useFilterTravelersAtom);

  const [filteredCharacters, setFilteredCharacters] =
    useState<IBaseCharacter[]>(characters);

  useEffect(() => {
    if (useFilterTravelers) {
      setFilteredCharacters(filterCharacters(characters));
    } else {
      setFilteredCharacters(characters);
    }
  }, [characters, useFilterTravelers]);

  return (
    <>
      <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
        <PageTitle title="Teyvat Characters" />
      </div>
      <CharacterFilterSection />
      <AllCharacterShowcase characters={filteredCharacters} />
    </>
  );
}
