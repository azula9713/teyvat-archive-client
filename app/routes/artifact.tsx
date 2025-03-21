import { getArtifactSetById } from "~/services/teyvatServer/teyvatArchive.service";
import type { Route } from "./+types/artifact";
import ArtifactMobileView from "~/components/artifact/artifactMobileView";

export async function loader({ params }: Readonly<Route.LoaderArgs>) {
  const { uniqueId } = params;

  const artifactSet: IArtifactSet = await getArtifactSetById(uniqueId);

  return { artifactSet };
}

export function meta(params: Readonly<Route.MetaArgs>) {
  const { data } = params;
  return [{ title: `Teyvat Archive - ${data.artifactSet.name}` }];
}

export default function Artifact({
  loaderData,
}: Readonly<Route.ComponentProps>) {
  const { artifactSet } = loaderData;
  return (
    <>
      <ArtifactMobileView {...{ artifactSet }} />
    </>
  );
}
