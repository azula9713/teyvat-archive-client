import { memo } from "react";

import { WEAPONS } from "~/data/teyvatData";
import weaponIconFilter from "~/utils/weaponIconFilter";

type Props = {
  selectedWeapon: string;
  setSelectedWeapon: (weapon: string) => void;
};

function WeaponFilter({ selectedWeapon, setSelectedWeapon }: Readonly<Props>) {
  return (
    <div className="w-full flex items-center justify-between space-x-2 p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg">
      {/* (display all weapon icons and make it seem like fluid switching between them) */}

      {WEAPONS.map((weapon) => (
        <button
          key={weapon}
          onClick={() => {
            if (selectedWeapon === weapon) {
              setSelectedWeapon("all");
            } else {
              setSelectedWeapon(weapon);
            }
          }}
        >
          <img
            src={weaponIconFilter[weapon]}
            alt={weapon}
            className="w-[36px]"
            style={{
              filter:
                selectedWeapon === weapon || selectedWeapon === "all"
                  ? "brightness(0) invert(1)"
                  : "",
            }}
          />
        </button>
      ))}
    </div>
  );
}

export default memo(WeaponFilter);
