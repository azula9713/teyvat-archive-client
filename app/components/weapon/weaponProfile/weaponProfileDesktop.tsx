import DescriptionDesktop from "~/components/common/descriptionDesktop";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";
import { formatWeaponStatValue } from "~/utils/formatters/weaponStatValue.formatter";
import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import {
  weaponStatIconFilter,
  weaponTypeIconFilter,
} from "~/utils/weaponIconFilter";
import parseText from "~/utils/parsers/parseEnkaText";
import { useState } from "react";
import RefinementSection from "../weaponRefinement/refinementSection";
import OverviewLevelPicker from "../weaponOverview/overviewLevelPicker";

type Props = {
  weapon: IWeapon;
};

function WeaponProfileDesktop({ weapon }: Readonly<Props>) {
  const { name, stars, splashImage } = weapon;

  const [refinementLevel, setRefinementLevel] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <>
      <div className="flex w-full m-2">
        <div className="w-1/3 flex flex-col items-start mx-2">
          <div className="flex items-center justify-start space-x-1 mb-2">
            <RarityStars stars={stars} />
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-start mx-2 ">
          <div className="flex w-full items-center justify-end space-x-1 mb-2">
            <TitleHeading text={name} />
          </div>
        </div>
      </div>
      <div className="w-full flex mx-2 relative h-full">
        <div className="w-1/3 flex flex-col items-start mx-2 ">
          <img
            src={splashImage}
            alt={name}
            className="absolute bottom-10 left-20"
            style={{
              height: "100%",
              scale: "2",
              rotate: "15deg",
            }}
          />
        </div>
        <div className="w-2/3 flex flex-col items-start mx-3 h-full rounded-xl bg-black/40 max-h-[500px]">
          <div className="w-full items-start flex justify-end my-4 px-4">
            <DescriptionDesktop
              description={weapon.description}
              align="right"
            />
          </div>
          <div className="flex space-x-1 w-full px-4 my-2">
            <div className="w-full h-full flex items-start justify-end">
              <OverviewItemHolder
                label="Weapon Series"
                value={weapon.series}
                align="end"
              />
              <OverviewItemHolder
                label="Weapon Type"
                value={weaponTypeParser(weapon.weaponType) as string}
                align="end"
              >
                <img
                  src={weaponTypeIconFilter[weapon.weaponType]}
                  alt={weaponTypeParser(weapon.weaponType)}
                  className="size-10"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </OverviewItemHolder>
            </div>
          </div>
          <div className="flex space-x-1 w-full px-4 my-2">
            <div className="w-full h-full flex items-start justify-end">
              <OverviewItemHolder
                label={weapon.stats[1][0].fightPropName}
                value={formatWeaponStatValue(
                  weapon.stats[selectedLevel][0].multiplier,
                  weapon.stats[selectedLevel][0].isPercent,
                  0
                )}
                align="end"
              >
                <img
                  className="size-5 my-2 mr-2"
                  src={
                    weaponStatIconFilter[
                      weapon.stats[1][0]
                        .fightProp as keyof typeof weaponStatIconFilter
                    ]
                  }
                  alt={weapon.weaponType}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </OverviewItemHolder>
              {stars > 2 && (
                <OverviewItemHolder
                  label={weapon.stats[1][1].fightPropName}
                  value={formatWeaponStatValue(
                    weapon.stats[selectedLevel][1].multiplier,
                    weapon.stats[selectedLevel][1].isPercent,
                    0
                  )}
                  align="end"
                >
                  <img
                    className="size-5 my-2 mr-2"
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
                  />{" "}
                </OverviewItemHolder>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end w-full px-6 my-2">
            <OverviewLevelPicker
              {...{ selectedLevel, setSelectedLevel, stars }}
            />
          </div>
          {stars > 2 && (
            <div className="w-full px-6 overflow-y-auto">
              <RefinementSection
                {...{
                  refinements: weapon.refinements,
                  setRefinementLevel,
                  refinementLevel,
                  align: "end",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WeaponProfileDesktop;
