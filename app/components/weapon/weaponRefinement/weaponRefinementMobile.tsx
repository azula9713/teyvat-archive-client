import { motion } from "framer-motion";
import { useState } from "react";

import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import parseText from "~/utils/parsers/parseEnkaText";

type Props = {
  refinements: IRefinement[];
};

export default function WeaponRefinementMobile({
  refinements,
}: Readonly<Props>) {
  const [refinementLevel, setRefinementLevel] = useState(1);
  return (
    <AttributeMobileContainer title="Refinement">
      <div className="px-4 py-6 space-y-2  text-white">
        <h5 className="text-lg font-semibold">{refinements[0].name}</h5>
        <div className="flex gap-3 w-full py-1">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.button
              key={`refinement-${i}`}
              onClick={() => setRefinementLevel(i + 1)}
              className="w-12 h-2 rounded-sm"
              animate={{
                backgroundColor:
                  i < refinementLevel
                    ? "var(--color-teal-600)"
                    : "var(--color-gray-300)",
              }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            />
          ))}
        </div>
        <div className="w-full pb-2">
          <h6 className="text-md pb-2">Refinement {refinementLevel}</h6>
          <p
            dangerouslySetInnerHTML={{
              __html: parseText(refinements[refinementLevel - 1].description),
            }}
          />
        </div>
      </div>
    </AttributeMobileContainer>
  );
}
