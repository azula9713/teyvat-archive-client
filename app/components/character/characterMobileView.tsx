import type { ICharacter } from "~/types/enka.types";
import AscensionMatsMobile from "./ascensionMatsMobile";
import MobileConstellationContainer from "./characterConstellations/mobileConstellationContainer";
import Mobileoverview from "./characterOverview/mobileOverview";
import CharacterProfileMobile from "./characterProfile/characterProfileMobile";
import TalentsMobile from "./characterTalents/talentsMobile";

type Props = {
  characterData: ICharacter;
};

export default function CharacterMobileView({
  characterData,
}: Readonly<Props>) {
  const {
    constellations,
    skills,
    passiveTalents,
    constellation,
    constellationIcon,
    ascensionData,
  } = characterData;
  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <CharacterProfileMobile
        charName={characterData.name}
        stars={characterData.stars}
        spalshImage={characterData.splashUrl}
        element={characterData.element}
      />

      <Mobileoverview
        element={characterData.element}
        weapon={characterData.weaponType}
        affiliation={characterData.location}
        description={characterData.description}
        name={characterData.nameId}
        constellation={constellation}
      />

      {skills && passiveTalents && (
        <TalentsMobile skills={skills} passiveTalents={passiveTalents} />
      )}

      {constellations && (
        <MobileConstellationContainer
          constellation={constellation}
          constellations={constellations}
          chapterIcon={constellationIcon}
        />
      )}

      {ascensionData && <AscensionMatsMobile ascensionData={ascensionData} />}
    </div>
  );
}
