import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import OverviewItemHolder from "../common/overviewItemHolder";
import WeaponProfileMobile from "./weaponProfile/weaponProfileMobile";
import weaponIconFilter from "~/utils/weaponIconFilter";

type Props = {
  weapon: IWeapon;
};

export default function WeaponMobileView({ weapon }: Props) {
  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <WeaponProfileMobile
        splashImage={weapon.splashImage}
        name={weapon.name}
        stars={weapon.stars}
      />
      <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full xl:hidden">
        <p
          className="text-sm md:text-base lg:text-lg mb-4 italic w-full text-slate-400"
          style={{
            lineHeight: "1rem",
          }}
        >
          "{weapon.description}"
        </p>
        <div className="flex w-full justify-between items-start">
          <OverviewItemHolder label="Base ATK" value="10">
            {/* <img
            className="w-5 h-5 mr-2"
            src={elementalImageFilter[element]}
            alt={element}
          /> */}
          </OverviewItemHolder>
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weapon.weaponType) as string}
          >
            <img
              className="w-6 h-6 mr-2"
              src={weaponIconFilter[weapon.weaponType]}
              alt={weapon.weaponType}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        </div>
        <div className="flex items-start w-full justify-between mt-4">
          {/* <OverviewItemHolder
          label="Affiliation"
          value={affiliation}
        ></OverviewItemHolder> */}
          {/* <OverviewItemHolder
          label="Birthday"
          value={birthday ? `${birthdayFormatter(birthday)}` : "Unknown"}
        >
         
        </OverviewItemHolder> */}
        </div>
      </div>
    </div>
  );
}
