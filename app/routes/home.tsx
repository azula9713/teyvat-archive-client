import { atom } from "jotai";

import { useFilterTravelersAtom } from "~/atoms/feature.atoms";
import PageTitle from "~/components/common/typography/pageTitle";
import AllCharacterShowcase from "~/components/home/allCharacterShowcase";
import CharacterFilterSection from "~/components/home/characterFilterSection";
import filterCharacters from "~/features/characterDisplayOptimizer";
import { getCharacters } from "~/services/enka/enka.service";
import type { IBaseCharacter } from "~/types/enka.types";
import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Teyvat Archive" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const characters: IBaseCharacter[] = await getCharacters();

  const fillterTravelers = atom((get) => get(useFilterTravelersAtom));

  if (fillterTravelers) {
    const filteredCharacters = filterCharacters(characters);

    return { characters: filteredCharacters };
  }

  return { characters };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Home({ loaderData }: Readonly<Route.ComponentProps>) {
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
