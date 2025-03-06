import MobileItemHeading from "~/components/common/typography/mobileItemHeading";
import type { ITalent } from "~/types/enka.types";
import DataItemCard from "../dataItemCard";

type Props = {
  skills: ITalent[];
  passiveTalents: ITalent[];
};

export default function TalentsMobile({
  skills,
  passiveTalents,
}: Readonly<Props>) {
  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 flex flex-col lg:flex-row lg:space-x-3 items-start justify-center p-4 rounded-lg shadow-md mb-2 w-full">
      <div className="w-full">
        <MobileItemHeading value="Character Skills" />
        <div className="w-full flex flex-col items-start justify-center">
          {skills.map((skill) => (
            <DataItemCard item={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className="w-full mt-3">
        <MobileItemHeading value="Passive Talents" />
        <div className="w-full flex flex-col items-start justify-center">
          {passiveTalents.map((passivetalent) => (
            <DataItemCard item={passivetalent} key={passivetalent.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
