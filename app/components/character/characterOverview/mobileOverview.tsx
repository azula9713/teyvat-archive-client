import OverviewItemHolder from "~/components/common/overviewItemHolder";
import birthdayFormatter from "~/utils/birthdayFormatter";
import elementalImageFilter from "~/utils/elementalImagePicker";
import weaponIconFilter from "~/utils/weaponIconFilter";
import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";

type Props = {
  element: IElementType;
  weapon: IWeaponType;
  affiliation: ICharacterLocation;
  description: string;
  birthday: IBirthday | null;
};

export default function MobileOverview({
  element,
  weapon,
  affiliation,
  description,
  birthday,
}: Readonly<Props>) {
  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full xl:hidden">
      <p
        className="text-sm md:text-base lg:text-lg mb-4 italic w-full text-slate-400"
        style={{
          lineHeight: "1rem",
        }}
      >
        "{description}"
      </p>
      <div className="flex w-full justify-between items-start">
        <OverviewItemHolder label="Element" value={element}>
          <img
            className="w-5 h-5 mr-2"
            src={elementalImageFilter[element]}
            alt={element}
          />
        </OverviewItemHolder>
        <OverviewItemHolder
          label="Weapon Type"
          value={weaponTypeParser(weapon) as string}
        >
          <img
            className="w-6 h-6 mr-2"
            src={weaponIconFilter[weapon]}
            alt={weapon}
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </OverviewItemHolder>
      </div>
      <div className="flex items-start w-full justify-between mt-4">
        <OverviewItemHolder
          label="Affiliation"
          value={`${affiliation.region} - ${affiliation.faction}`}
        />
        <OverviewItemHolder
          label="Birthday"
          value={birthday ? `${birthdayFormatter(birthday)}` : "Unknown"}
        />
      </div>
    </div>
  );
}
