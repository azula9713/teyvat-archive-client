import { useMemo, useState } from "react";
import type { IAllTalent, IElementType, ITalent } from "~/types/enka.types";
import DesktopContainer from "../containers/desktopContainer";
import CharacterTalentDetails from "./characterTalentDetails";
import TalentIcon from "./talentIcon";

type Props = {
  element: IElementType;
  skills: ITalent[];
  passiveTalents: ITalent[];
};

export default function TalentsDesktop({
  element,
  skills,
  passiveTalents,
}: Readonly<Props>) {
  const [selectedTalentId, setSelectedTalentId] = useState<number>(0);
  const [allTalents, setAllTalents] = useState<IAllTalent[]>([]);

  useMemo(() => {
    if (skills?.length > 0 && passiveTalents?.length > 0) {
      //add an attribute to the talent to determine if it is a passive or not to a new array with new type

      const newSkills = skills.map((skill) => {
        return {
          ...skill,
          isPassive: false,
        };
      });

      const newPassiveTalents = passiveTalents.map((passiveTalent) => {
        return {
          ...passiveTalent,
          isPassive: true,
        };
      });

      setAllTalents([...newSkills, ...newPassiveTalents]);
    }
  }, [skills, passiveTalents]);

  useMemo(() => {
    if (skills && skills.length > 0) {
      setSelectedTalentId(skills[0].id);
    }
  }, [skills]);

  return (
    <DesktopContainer title="Talents">
      <div className="w-full flex items-center justify-start space-x-8 mt-8 mb-6">
        {allTalents
          .filter((skill) => skill.name !== "")
          .map((skill) => (
            <TalentIcon
              talent={skill}
              key={skill.id}
              selectedTalentId={selectedTalentId}
              setSelectedTalentId={setSelectedTalentId}
              element={element}
            />
          ))}
      </div>

      <CharacterTalentDetails
        selectedTalent={allTalents?.find(
          (skill) => skill.id === selectedTalentId
        )}
      />
    </DesktopContainer>
  );
}
