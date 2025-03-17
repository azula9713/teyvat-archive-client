import React from "react";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import {
  weaponStatIconFilter,
  weaponTypeIconFilter,
} from "~/utils/weaponIconFilter";

type Props = {
  stars: number;
  description: string;
  stats: {
    [key: string]: IWeaponStat[];
  };
  weaponType: IWeaponType;
};

export default function WeaponMobileOverview({
  stars,
  description,
  stats,
  weaponType,
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
        {stars > 2 && (
          <OverviewItemHolder
            label="Advanced Stat"
            value={stats[1][1].fightPropName}
          >
            <img
              className="size-4.5 mr-2"
              src={
                weaponStatIconFilter[
                  stats[1][1].fightProp as keyof typeof weaponStatIconFilter
                ]
              }
              alt={weaponType}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        )}
        <OverviewItemHolder
          label="Weapon Type"
          value={weaponTypeParser(weaponType) as string}
        >
          <img
            className="size-6 mr-2"
            src={weaponTypeIconFilter[weaponType]}
            alt={weaponType}
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </OverviewItemHolder>
      </div>
    </div>
  );
}
