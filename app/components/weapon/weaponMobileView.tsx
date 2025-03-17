import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import OverviewItemHolder from "../common/overviewItemHolder";
import WeaponProfileMobile from "./weaponProfile/weaponProfileMobile";
import {
  weaponStatIconFilter,
  weaponTypeIconFilter,
} from "~/utils/weaponIconFilter";

type Props = {
  weapon: IWeapon;
};

export default function WeaponMobileView({ weapon }: Readonly<Props>) {
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
          {weapon.stars > 2 && (
            <OverviewItemHolder
              label="Advanced Stat"
              value={weapon.stats[1][1].fightPropName}
            >
              <img
                className="size-[1.12rem] mr-2"
                src={
                  weaponStatIconFilter[
                    weapon.stats[1][1]
                      .fightProp as keyof typeof weaponStatIconFilter
                  ]
                }
                alt={weapon.weaponType}
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </OverviewItemHolder>
          )}
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weapon.weaponType) as string}
          >
            <img
              className="size-6 mr-2"
              src={weaponTypeIconFilter[weapon.weaponType]}
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
