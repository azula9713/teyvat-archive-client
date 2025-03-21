import PageTitle from "~/components/common/typography/pageTitle";
import ShowcaseFilterContainer from "~/components/layout/container/showcaseFilterContainer";
import AllWeaponShowcase from "~/components/weaponShowcase/allWeaponShowcase";
import WeaponFilterSection from "~/components/weaponShowcase/filtering/weaponFilterSection";
import {
  getWeapons,
  getWeaponSeries,
} from "~/services/teyvatServer/teyvatArchive.service";
import type { Route } from "./+types/weapons";

export async function loader() {
  const [weapons, weaponSeries] = await Promise.all([
    getWeapons(),
    getWeaponSeries(),
  ]);

  return { weapons, weaponSeries };
}

export function meta() {
  return [
    { title: `Teyvat Archive - Weapons` },
    { name: "description", content: "Welcome to Teyvat Archive!" },
  ];
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Weapons({
  loaderData,
}: Readonly<Route.ComponentProps>) {
  const { weapons, weaponSeries } = loaderData;

  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
          <PageTitle title="Teyvat Weapons" />
        </div>
        <WeaponFilterSection weaponSeries={weaponSeries} />
      </ShowcaseFilterContainer>
      <AllWeaponShowcase weapons={weapons} />
    </>
  );
}
