import OverviewItemHolder from "~/components/common/overviewItemHolder";
import birthdayFormatter from "~/utils/birthdayFormatter";
import elementalImageFilter from "~/utils/elementalImagePicker";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";
import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import characterLocationParser from "~/utils/parsers/characterLocationParser";

type Props = {
  element: IElementType;
  weapon: IWeaponType;
  affiliation: ICharacterLocation;
  birthday: IBirthday | null;
  isTraveler: boolean;
};

export default function DesktopOverview({
  element,
  weapon,
  affiliation,
  birthday,
  isTraveler,
}: Readonly<Props>) {
  return (
    <div className="hidden xl:flex mt-4 xl:mt-8 flex-col items-start justify-center py-4 w-full h-full">
      <div className="w-full flex flex-col items-start justify-evenly">
        <div className="flex w-full items-start justify-start">
          <OverviewItemHolder label="Element" value={element}>
            <img
              className="size-12 mr-2"
              src={elementalImageFilter[element]}
              alt={element}
            />
          </OverviewItemHolder>
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weapon) as string}
            textShadowLabel
            textShadowValue
          >
            <img
              className="size-14 mr-2"
              src={weaponTypeIconFilter[weapon]}
              alt={weapon}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        </div>
        <div className="flex w-full items-start justify-start">
          <OverviewItemHolder
            label="Affiliation"
            value={characterLocationParser(affiliation, isTraveler)}
          />
          <OverviewItemHolder
            label="Birthday"
            value={birthday ? `${birthdayFormatter(birthday)}` : "Unknown"}
            textShadowLabel
            textShadowValue
          />
        </div>
      </div>
    </div>
  );
}
