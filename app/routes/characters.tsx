import { atom } from "jotai";

import { useFilterTravelersAtom } from "~/atoms/feature.atoms";
import AllCharacterShowcase from "~/components/characterShowcase/allCharacterShowcase";
import CharacterFilterSection from "~/components/characterShowcase/characterFilterSection";
import PageTitle from "~/components/common/typography/pageTitle";
import filterCharacters from "~/features/characterDisplayOptimizer";
import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";

import type { Route } from "./+types/characters";

export async function loader() {
  const characters: IBaseCharacter[] = await getCharacters();

  let charactersResponse = characters;

  const fillterTravelers = atom((get) => get(useFilterTravelersAtom));

  if (fillterTravelers) {
    const filteredCharacters = filterCharacters(characters);

    charactersResponse = filteredCharacters;
  }

  return { characters: charactersResponse };
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

  return (
    <>
      <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
        <PageTitle title="Teyvat Characters" />
      </div>
      <CharacterFilterSection />
      <AllCharacterShowcase characters={characters} />
    </>
  );
}
