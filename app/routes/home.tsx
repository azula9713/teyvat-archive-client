import { atom } from "jotai";

import { useFilterTravelersAtom } from "~/atoms/feature.atoms";
import AllCharacterShowcase from "~/components/home/allCharacterShowcase";
import ElementalPicker from "~/components/home/elementalPicker";
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
      <ElementalPicker />
      <AllCharacterShowcase characters={characters} />
    </>
  );
}
