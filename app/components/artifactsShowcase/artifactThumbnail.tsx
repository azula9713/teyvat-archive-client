import { motion } from "framer-motion";
import { NavLink } from "react-router";

import rarityParser from "~/utils/parsers/rarityParser";
import ThumbnaiContainer from "../layout/container/thumbnailContainer";

type Props = {
  artifactSet: IBaseArtifactSet;
};

export default function ArtifactThumbnail({
  artifactSet: artifact,
}: Readonly<Props>) {
  const { id, name, icon, highestRarity } = artifact;
  return (
    <ThumbnaiContainer
      {...{
        name,
        rarity: rarityParser(highestRarity),
      }}
    >
      <NavLink to={`/artifact/${id}`}>
        <div className="w-full flex flex-col items-center mt-1">
          <div className="h-3/4 flex items-end justify-center">
            <motion.img
              src={icon}
              alt={id + " icon"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </NavLink>
    </ThumbnaiContainer>
  );
}
