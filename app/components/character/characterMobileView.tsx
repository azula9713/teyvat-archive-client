import AscensionMatsMobile from "./characterAscension/ascensionMatsMobile";
import MobileConstellationView from "./characterConstellations/mobileConstellationView";
import MobileOverview from "./characterOverview/mobileOverview";
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
      <MobileOverview
        element={characterData.element}
        weapon={characterData.weaponType}
        affiliation={characterData.location}
        description={characterData.description}
        birthday={characterData.birthday}
      />
      <TalentsMobile skills={skills} passiveTalents={passiveTalents} />
      <MobileConstellationView
        constellation={constellation}
        constellations={constellations}
        chapterIcon={constellationIcon}
      />
      <AscensionMatsMobile ascensionData={ascensionData} />
    </div>
  );
}
