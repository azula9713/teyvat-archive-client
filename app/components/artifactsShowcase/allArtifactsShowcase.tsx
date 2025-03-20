import { motion } from "framer-motion";
import { useState } from "react";
import ArtifactThumbnail from "./artifactThumbnail";

type Props = {
  artifactSets: IBaseArtifactSet[];
};

export default function AllArtifactsShowcase({
  artifactSets,
}: Readonly<Props>) {
  const [filteredArtifacts, setFilteredArtifacts] =
    useState<IBaseArtifactSet[]>(artifactSets);

  return (
    <div className="overflow-hidden w-full items-center justify-center flex px-4 md:px-12">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="mt-2 grid auto-cols-fr grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 overflow-y-auto"
        style={{
          maxHeight: "calc(100vh - 300px)",
        }}
      >
        {filteredArtifacts.map((artiSet) => (
          <ArtifactThumbnail
            key={artiSet.id}
            {...{
              artifactSet: artiSet,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
