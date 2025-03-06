import { useState } from "react";
import type { IAscensionData } from "~/types/enka.types";
import AscensionMaterialHolder from "../../common/ascensionMaterialHolder";
import MobileContainer from "../containers/mobileContainer";

type Props = {
  ascensionData: IAscensionData[];
};

export default function AscensionMatsMobile({
  ascensionData,
}: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  const itemsMap = ascensionData
    ?.flatMap((ascData) => ascData.costItems)
    .filter((item) => item.id)
    ?.reduce((acc, { id, count }) => {
      acc[id] = (acc[id] || 0) + count;
      return acc;
    }, {} as { [id: string]: number });

  const itemsArray = Object.entries(itemsMap);

  return (
    <MobileContainer title="Ascension Materials">
      {ascensionData ? (
        itemsArray.map(([id, count], index) => {
          if (!id || !count) return null;
          return (
            <div key={id}>
              <AscensionMaterialHolder
                id={id}
                value={count.toString()}
                index={index}
              />
            </div>
          );
        })
      ) : (
        <div>Loading Ascension data</div>
      )}
    </MobileContainer>
  );
}
