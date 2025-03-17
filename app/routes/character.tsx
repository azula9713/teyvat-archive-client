import CharacterDesktopView from "~/components/character/characterDesktopView";
import CharacterMobileView from "~/components/character/characterMobileView";
import { transforCharacterData } from "~/features/imageFetchOptimizer";
import { getCharacterBySkillDepotId } from "~/services/teyvatServer/teyvatArchive.service";

import type { Route } from "./+types/character";
import { decryptCharacterUniqueRoute } from "~/utils/decryptUniqueId";

export async function loader({ params }: Readonly<Route.LoaderArgs>) {
  const { uniqueId } = params;

  const { skillDepotId, enkaId } = decryptCharacterUniqueRoute(uniqueId);

  const character: ICharacter = await getCharacterBySkillDepotId(
    enkaId,
    skillDepotId
  );

  const transformedCharacter = transforCharacterData(character);

  return { character: transformedCharacter };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function meta(params: Readonly<Route.MetaArgs>) {
  const { data } = params;
  return [
    { title: `Teyvat Archive - ${data.character.name}` },
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
