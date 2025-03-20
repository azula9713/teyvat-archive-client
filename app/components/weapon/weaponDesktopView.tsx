import rarityBgPicker from "~/utils/rarityBgPicker";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import RarityStars from "../common/rarityStars";
import TitleHeading from "../common/typography/titleHeading";
import WeaponProfileDesktop from "./weaponProfile/weaponProfileDesktop";
import RefinementSection from "./weaponRefinement/refinementSection";
import { useState } from "react";
import TabNavigation from "../common/basic/tabNavigation";
import AttributeDesktopContainer from "../layout/container/attributeDesktopContainer";

type Props = {
  weapon: IWeapon;
};

function WeaponDesktopView({ weapon }: Readonly<Props>) {
  const { name, stars, icon, awakenIcon, splashImage } = weapon;

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

  const [refinementLevel, setRefinementLevel] = useState(1);
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
              <AttributeDesktopContainer title="Refinements">
                <RefinementSection
                  {...{
                    refinements: weapon.refinements,
                    setRefinementLevel,
                    refinementLevel,
                    align: "start",
                  }}
                />
              </AttributeDesktopContainer>
            )}
          </div>
        </div>
        {/* tab content ends */}
      </div>
    </div>
  );
}

export default WeaponDesktopView;
