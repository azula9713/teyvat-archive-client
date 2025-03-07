import StaticNameCard from "~/assets/images/namecards/UI_NameCardPic_0_P.png";
import type { ICharacter } from "~/types/enka.types";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import AscensionMatsDesktop from "./characterAscension/ascensionMatsDesktop";
import DesktopConstellationView from "./characterConstellations/desktopConstellationView";
import DesktopOverview from "./characterOverview/desktopOverview";
import CharacterProfileDesktop from "./characterProfile/characterProfileDesktop";
import TalentsDesktop from "./characterTalents/talentsDesktop";
import RarityStars from "./rarityStars";

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
  } = characterData;

  return (
    <div className="py-4 px-12 flex-col items-center justify-start space-y-8 hidden xl:flex">
      <LazyBackgroundImage
        img={nameCard === "No Name Card" ? StaticNameCard : nameCard}
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
                //move bit to top
                transform: "translateY(-8px)",
              }}
            />
            <RarityStars stars={stars} />
          </div>
          <CharacterProfileDesktop
            title={title}
            name={name}
            description={description}
          />
          <DesktopOverview
            element={element}
            weapon={weaponType}
            affiliation={location}
            birthday={characterData.birthday}
          />
        </div>
        <div className="w-full xl:h-[400px] flex items-center justify-end">
          <div className={`w-4/5 h-full ${nameId}`}>
            <img
              src={splashUrl}
              alt={name}
              style={{
                height: "100%",
                marginLeft: "18%",
                marginTop: "3%",
                scale: "1.2",
              }}
            />
          </div>
        </div>
      </LazyBackgroundImage>
      <TalentsDesktop
        element={element}
        skills={skills}
        passiveTalents={passiveTalents}
      />
      <DesktopConstellationView
        consName={constellation}
        constellations={constellations}
        chapterIcon={constellationIcon}
        element={element}
      />
      <AscensionMatsDesktop ascensionData={ascensionData} />
    </div>
  );
}

export default CharacterDesktopView;
