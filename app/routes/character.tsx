import { atom } from "jotai";
import { useImageFetchOptimizerAtom } from "~/atoms/feature.atoms";
import CharacterDesktopView from "~/components/character/characterDesktopView";
import CharacterMobileView from "~/components/character/characterMobileView";
import { transforCharacterData } from "~/features/imageFetchOptimizer";
import { getCharacterBySkillDepotId } from "~/services/enka/enka.service";
import type { ICharacter } from "~/types/enka.types";
import decryptUniqueRoute from "~/utils/decryptUniqueId";
import type { Route } from "./+types/character";

export async function loader({ params }: Readonly<Route.LoaderArgs>) {
  const { uniqueId } = params;

  const useImageFetchOptimizer = atom((get) => get(useImageFetchOptimizerAtom));

  const { skillDepotId, enkaId } = decryptUniqueRoute(uniqueId);

  const character: ICharacter = await getCharacterBySkillDepotId(
    enkaId,
    skillDepotId
  );

  if (useImageFetchOptimizer) {
    const transformedCharacter = transforCharacterData(character);
    return { character: transformedCharacter };
  } else {
    return { character };
  }
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function meta(params: Readonly<Route.MetaArgs>) {
  const { data } = params;
  return [
    { title: data.character.name },
    //set favicon side icon
    { name: "favicon", content: data.character.sideIcon },
    { name: "description", content: data.character.description },
  ];
}

export default function Character({
  loaderData,
}: Readonly<Route.ComponentProps>) {
  const { character } = loaderData;

  return (
    <>
      <CharacterMobileView characterData={character} />
      <CharacterDesktopView characterData={character} />
    </>
  );
}
