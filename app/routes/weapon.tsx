import { decryptWeaponUniqueRoute } from "~/utils/decryptUniqueId";
import type { Route } from "./+types/weapon";
import { getWeaponById } from "~/services/teyvatServer/teyvatArchive.service";
import WeaponMobileView from "~/components/weapon/weaponMobileView";
import WeaponDesktopView from "~/components/weapon/weaponDesktopView";

export async function loader({ params }: Readonly<Route.LoaderArgs>) {
  const { uniqueId } = params;
  const { weaponId } = decryptWeaponUniqueRoute(uniqueId);

  const weapon: IWeapon = await getWeaponById(weaponId);

  return { weapon };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function meta(params: Readonly<Route.MetaArgs>) {
  const { data } = params;
  return [
    { title: `Teyvat Archive - ${data.weapon.name}` },
    { name: "description", content: data.weapon.description },
  ];
}

export default function Weapon({ loaderData }: Readonly<Route.ComponentProps>) {
  const { weapon } = loaderData;

  return (
    <>
      <WeaponMobileView weapon={weapon} />
      <WeaponDesktopView weapon={weapon} />
    </>
  );
}
