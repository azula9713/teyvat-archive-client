import { getWeapons } from "~/services/teyvatServer/teyvatArchive.service";
import type { Route } from "./+types/weapons";
import PageTitle from "~/components/common/typography/pageTitle";
import AllWeaponShowcase from "~/components/weaponShowcase/allWeaponShowcase";
import WeaponFilterSection from "~/components/weaponShowcase/weaponFilterSection";

export async function loader() {
  const weapons: IBaseWeapon[] = await getWeapons();

  return { weapons };
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
  const { weapons } = loaderData;
  return (
    <>
      <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
        <PageTitle title="Teyvat Weapons" />
      </div>
      <WeaponFilterSection />
      <AllWeaponShowcase weapons={weapons} />
    </>
  );
}
