import React from "react";
import { motion } from "framer-motion";

import rarityColoFilter from "~/utils/thumbnailColorFilter";

type Props = {
  rarity: IRarityType;
  children: React.ReactNode;
  name: string;
};

export default function ThumbnaiContainer({ children, rarity, name }: Props) {
  const {
    toColor: bgTo,
    fromColor: bgFrom,
    viaColor: bgVia,
  } = rarityColoFilter[rarity];

  return (
    <div className="flex flex-col items-center mb-3">
      <motion.div
        layout
        animate={{
          opacity: 1,
        }}
        style={{
          backgroundImage: `linear-gradient(to top, ${bgFrom}, ${bgVia}, ${bgTo}`,
        }}
        className="mx-3 w-[100px] relative lg:w-[130px] rounded-xl shadow-lg drop-shadow-md shadow-[#d6d6d6] dark:shadow-[#323333] overflow-hidden"
      >
        {children}
      </motion.div>
      <p className="text-sm text-center font-semibold my-1">{name}</p>
    </div>
  );
}
