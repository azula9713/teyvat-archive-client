import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";

import ThumbnaiContainer from "../layout/container/thumbnailContainer";
import rarityParser from "~/utils/parsers/rarityParser";

type Props = {
  weapon: IBasicWeapon;
};

export default function WeaponThumbnail({ weapon }: Readonly<Props>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ThumbnaiContainer name={weapon.name} rarity={rarityParser(weapon.stars)}>
      <NavLink to={`/weapon/${weapon.id}-${weapon.enkaId}`}>
        <button
          className="w-full flex flex-col items-center mt-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="h-3/4 flex items-end justify-center">
            <motion.img
              src={isHovered ? weapon.awakenIcon : weapon.icon}
              alt={weapon.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </button>
      </NavLink>
    </ThumbnaiContainer>
  );
}
