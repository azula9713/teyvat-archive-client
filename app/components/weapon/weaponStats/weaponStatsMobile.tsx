import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import { formatWeaponStatValue } from "~/utils/formatters/weaponStatValue.formatter";

type Props = {
  stats: {
    [key: string]: IWeaponStat[];
  };
  stars: number;
};

export default function WeaponStatsMobile({ stats, stars }: Readonly<Props>) {
  return (
    <AttributeMobileContainer title="Stats">
      <div className="py-6 space-y-2 text-white">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-600">
              <th className="p-3 text-center text-sm font-semibold border-b border-r border-gray-700">
                Lv.
              </th>
              <th className="p-3 text-center text-sm font-semibold border-b border-r border-gray-700">
                {stats[1][0].fightPropName}
              </th>
              {stars > 2 && (
                <th className="p-3 text-center text-sm font-semibold border-b border-r border-gray-700">
                  {stats[1][1].fightPropName}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {Object.keys(stats).map((key) => {
              const level = Number(key);
              const stat = stats[level];
              return (
                <tr
                  key={key}
                  className="even:bg-gray-900 odd:bg-gray-950 hover:bg-gray-800 transition-colors"
                >
                  <td className="p-3 text-right border-r border-gray-700">
                    {level}
                  </td>
                  <td className="p-3 text-right border-r border-gray-700">
                    {formatWeaponStatValue(
                      stat[0].multiplier,
                      stat[0].isPercent,
                      0
                    )}
                  </td>

                  {stars > 2 && (
                    <td className="p-3 text-right border-gray-700">
                      {formatWeaponStatValue(
                        stat[1].multiplier,
                        stat[1].isPercent,
                        1
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AttributeMobileContainer>
  );
}
