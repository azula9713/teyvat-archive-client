import WeaponProfileMobile from "./weaponProfile/weaponProfileMobile";
import WeaponMobileOverview from "./weaponOverview/weaponMobileOverview";

import WeaponRefinementMobile from "./weaponRefinement/weaponRefinementMobile";
import AttributeMobileContainer from "../layout/container/attributeMobileContainer";

type Props = {
  weapon: IWeapon;
};

export default function WeaponMobileView({ weapon }: Readonly<Props>) {
  const {
    refinements,
    splashImage,
    name,
    stars,
    description,
    weaponType,
    stats,
  } = weapon;
  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <WeaponProfileMobile {...{ splashImage, name, stars }} />
      <WeaponMobileOverview {...{ stars, description, stats, weaponType }} />

      <AttributeMobileContainer title="Stats">
        <div className="py-6 space-y-2  text-white">
          {/* <h5 className="text-lg font-semibold">{refinements[0].name}</h5> */}
        </div>
      </AttributeMobileContainer>
      {stars > 2 && <WeaponRefinementMobile {...{ refinements }} />}
    </div>
  );
}
