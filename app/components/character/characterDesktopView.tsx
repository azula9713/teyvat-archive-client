import { useState } from "react";

import { getMarginRightValue, getZoomValue } from "~/utils/splashArtZoom";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import AscensionMatsDesktop from "./characterAscension/ascensionMatsDesktop";
import DesktopConstellationView from "./characterConstellations/desktopConstellationView";
import CharacterDesktopOverview from "./characterOverview/characterDesktopOverview";
import CharacterProfileDesktop from "./characterProfile/characterProfileDesktop";
import TalentsDesktop from "./characterTalents/talentsDesktop";
import RarityStars from "../common/rarityStars";
import TabNavigation from "../common/basic/tabNavigation";

type Props = {
  characterData: ICharacter;
};

function CharacterDesktopView({ characterData }: Readonly<Props>) {
  const {
    element,
    splashUrl,
    nameCard,
    stars,
    name,
    skills,
    passiveTalents,
    weaponType,
    location,
    constellation,
    constellations,
    description,
    title,
    nameId,
    constellationIcon,
    sideIcon,
    ascensionData,
    birthday,
    isTraveler,
  } = characterData;

  const TAB_NAV = [
    {
      name: "Talents",
      id: "talents",
    },
    {
      name: "Constellations",
      id: "constellations",
    },
    {
      name: "Ascension",
      id: "ascension",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(TAB_NAV[0].id);

  return (
    <div className="py-4 px-12 flex-col items-center justify-start space-y-8 hidden xl:flex w-full overflow-x-hidden">
      <LazyBackgroundImage
        img={nameCard}
        isDarkened
        className="hidden xl:flex w-[calc(100%-3rem)] flex-col relative items-start justify-between p-10 xl:h-[650px] rounded-4xl"
      >
        <div className="w-2/3 flex flex-col items-start mr-4 absolute z-10">
          <div className="flex items-center justify-start space-x-1 mb-5">
            <img
              className="size-12 mr-2"
              src={sideIcon}
              alt={name}
              style={{
                zoom: "1.5",
                transform: "translateY(-8px)",
              }}
            />
            <RarityStars stars={stars} />
          </div>
          <CharacterProfileDesktop {...{ name, title, description }} />
          <CharacterDesktopOverview
            {...{
              element,
              weapon: weaponType,
              affiliation: location,
              birthday,
              isTraveler,
            }}
          />
        </div>
        <div className="w-full xl:h-[400px]  flex items-center justify-end">
          <div className={`w-4/5 h-full ${nameId} relative`}>
            <img
              src={splashUrl}
              className={`bottom-[-10] right-0 absolute ${getMarginRightValue(
                characterData.bodyType,
                characterData.isTraveler
              )}`}
              alt={name}
              style={{
                height: "100%",
                marginTop: "15%",
                scale: `${getZoomValue(
                  characterData.rarity,
                  characterData.bodyType,
                  characterData.isTraveler,
                  characterData.isArchon
                )}`,
              }}
            />
          </div>
        </div>
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
            {selectedTab === "talents" && (
              <TalentsDesktop {...{ element, skills, passiveTalents }} />
            )}
            {selectedTab === "constellations" && (
              <DesktopConstellationView
                {...{
                  consName: constellation,
                  constellations,
                  constellationIcon,
                  element,
                }}
              />
            )}
            {selectedTab === "ascension" && (
              <AscensionMatsDesktop {...{ ascensionData }} />
            )}
          </div>
        </div>
        {/* tab content ends */}
      </div>
    </div>
  );
}

export default CharacterDesktopView;
