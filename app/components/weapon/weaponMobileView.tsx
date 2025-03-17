import WeaponProfileMobile from "./weaponProfile/weaponProfileMobile";
import WeaponMobileOverview from "./weaponOverview/weaponMobileOverview";

import WeaponRefinementMobile from "./weaponRefinement/weaponRefinementMobile";

type Props = {
  weapon: IWeapon;
};

export default function WeaponMobileView({ weapon }: Readonly<Props>) {
  console.log("Weapon", weapon.refinements);

  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <WeaponProfileMobile
        splashImage={weapon.splashImage}
        name={weapon.name}
        stars={weapon.stars}
      />
      <WeaponMobileOverview
        description={weapon.description}
        stars={weapon.stars}
        weaponType={weapon.weaponType}
        stats={weapon.stats}
      />
      <WeaponRefinementMobile refinements={weapon.refinements} />
    </div>
  );
}
