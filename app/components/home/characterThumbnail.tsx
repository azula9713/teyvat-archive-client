import { motion } from "framer-motion";
import { NavLink } from "react-router";

import type { IBaseCharacter } from "~/types/enka.types";
import elementalImageFilter from "~/utils/elementalImagePicker";
import colorFilter from "~/utils/thumbnailColorFilter";

type Props = {
  character: IBaseCharacter;
};

export default function CharacterThumbnail({ character }: Readonly<Props>) {
  const {
    toColor: bgTo,
    fromColor: bgFrom,
    viaColor: bgVia,
  } = colorFilter[character.rarity];

  return (
    <motion.div
      layout
      animate={{
        opacity: 1,
      }}
      // style={{ backgroundColor: bgColorFilter[character.rarity] }}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${bgFrom}, ${bgVia}, ${bgTo}`,
      }}
      className="mx-3 w-[100px] relative lg:w-[130px] rounded-xl shadow-lg drop-shadow-md shadow-[#d6d6d6] dark:shadow-[#323333] overflow-hidden mb-5"
    >
      <NavLink
        to={`/character/${character.nameId}-${character.enkaId}-${character.skillDepotId}`}
      >
        <div className="w-full flex flex-col items-center mt-1 h-[130px] lg:h-[170px]">
          <div className="h-3/4 flex items-end justify-center">
            <img src={character.iconUrl} alt={character.id} />
          </div>
          <div
            className="w-full h-1/4 flex items-center justify-center"
            style={{ backgroundColor: "var(--color-gray-900)" }}
          >
            <p className="text-sm text-center font-semibold leading-3 mt-1 flex items-center h-full p-1 text-white">
              {character.name}
            </p>
          </div>
        </div>
      </NavLink>
      <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
        <img
          src={elementalImageFilter[character.element]}
          alt={character.element}
          className="w-4 h-4 lg:w-5 lg:h-5"
        />
      </div>
    </motion.div>
  );
}
