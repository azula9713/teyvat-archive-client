import AllArtifactsShowcase from "~/components/artifactsShowcase/allArtifactsShowcase";
import PageTitle from "~/components/common/typography/pageTitle";
import { getArtifactSets } from "~/services/teyvatServer/teyvatArchive.service";
import type { Route } from "./+types/artifacts";

export async function loader() {
  const artifactSets: IBaseArtifactSet[] = await getArtifactSets();

  return { artifactSets };
}

export function meta() {
  return [
    { title: `Teyvat Archive - Artifacts` },
    { name: "description", content: "Welcome to Teyvat Archive!" },
  ];
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Artifacts({
  loaderData,
}: Readonly<Route.ComponentProps>) {
  const { artifactSets } = loaderData;
  return (
    <>
      <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
        <PageTitle title="Teyvat Artifacts" />
      </div>
      <AllArtifactsShowcase artifactSets={artifactSets} />
    </>
  );
}
