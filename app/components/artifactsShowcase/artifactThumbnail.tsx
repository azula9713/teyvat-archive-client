import { motion } from "framer-motion";
import { NavLink } from "react-router";

import ThumbnaiContainer from "../layout/container/thumbnailContainer";
import rarityParser from "~/utils/parsers/rarityParser";

type Props = {
  artifact: IBaseArtifact;
};

export default function ArtifactThumbnail({ artifact }: Props) {
  return (
    <ThumbnaiContainer
      name={artifact.name}
      rarity={rarityParser(artifact.stars)}
    >
      <NavLink to={`/artifact/${artifact.id}`}>
        <div className="w-full flex flex-col items-center mt-1">
          <div className="h-3/4 flex items-end justify-center">
            <motion.img
              src={artifact.icon}
              alt={artifact.id + " icon"}
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
