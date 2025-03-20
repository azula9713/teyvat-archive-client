import { useState } from "react";
import rarityBgPicker from "~/utils/rarityBgPicker";
import TabNavigation from "../common/basic/tabNavigation";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import WeaponProfileDesktop from "./weaponProfile/weaponProfileDesktop";
import WeaponRefinementDesktop from "./weaponRefinement/weaponRefinementDesktop";
import WeaponStatsDesktop from "./weaponStats/weaponStatsDesktop";

type Props = {
  weapon: IWeapon;
};

function WeaponDesktopView({ weapon }: Readonly<Props>) {
  const { name, stars, stats, icon, awakenIcon, splashImage, refinements } =
    weapon;

  const TAB_NAV = [
    {
      name: "Refinement",
      id: "refinement",
    },
    {
      name: "Stats",
      id: "stats",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(TAB_NAV[0].id);

  return (
    <div className="py-4 px-12 flex-col items-center justify-start space-y-8 hidden xl:flex w-full overflow-hidden">
      <LazyBackgroundImage
        img={rarityBgPicker(stars)}
        isDarkened
        className="hidden xl:flex w-[calc(100%-3rem)] flex-col items-start justify-start p-10 xl:h-[650px] rounded-4xl"
      >
        <WeaponProfileDesktop {...{ weapon }} />
      </LazyBackgroundImage>

      <div className="w-full flex items-start justify-between space-x-4 border-2 rounded-lg border-slate-700 mt-20">
        <TabNavigation
          tabs={TAB_NAV}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {/* tab content */}
        <div className="w-full">
          <div className="px-4 pb-6">
            {selectedTab === "refinement" && stars > 2 && (
              <WeaponRefinementDesktop {...{ refinements }} />
            )}
            {selectedTab === "stats" && (
              <WeaponStatsDesktop {...{ stars, stats }} />
            )}
          </div>
        </div>
        {/* tab content ends */}
      </div>
    </div>
  );
}

export default WeaponDesktopView;
