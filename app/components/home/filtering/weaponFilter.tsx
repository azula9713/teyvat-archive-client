import { motion } from "framer-motion";

import { WEAPONS } from "~/data/teyvatData";
import weaponIconFilter from "~/utils/weaponIconFilter";

type Props = {
  selectedWeapon: string;
  setSelectedWeapon: (weapon: string) => void;
};

export default function WeaponFilter({
  selectedWeapon,
  setSelectedWeapon,
}: Readonly<Props>) {
  return (
    <div>
      {/* (display all weapon icons and make it seem like fluid switching between them) */}
      <motion.div
        className="flex justify-center items-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`flex items-center space-x-2 w-full`}>
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
              <motion.img
                src={weaponIconFilter[weapon]}
                alt={weapon}
                className="w-[40px]"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  filter:
                    selectedWeapon === weapon ? "brightness(0) invert(1)" : "",
                }}
              />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
