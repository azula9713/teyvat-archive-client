import { useEffect, useState } from "react";

import AttributeDesktopContainer from "../../layout/container/attributeDesktopContainer";
import ConstellationDetails from "./constellationDetails";
import ConstellationIcon from "./constellationIcon";

type Props = {
  consName: string;
  constellations: IConstellation[];
  chapterIcon: string;
  element: IElementType;
};

export default function DesktopConstellationView({
  consName,
  constellations,
  chapterIcon,
  element,
}: Readonly<Props>) {
  const [selectedConstellation, setSelectedConstellation] =
    useState<IConstellation>(constellations?.[0]);

  useEffect(() => {
    setSelectedConstellation(constellations?.[0]);
  }, [constellations]);

  return (
    <AttributeDesktopContainer title={`Constellation - ${consName}`}>
      <div className="w-full flex items-start justify-between space-x-6">
        <div className="w-1/2 flex flex-col items-center justify-start pb-40">
          <div
            className="mt-40 min-h-max flex items-center justify-center w-full"
            style={{
              //rotate 180deg to make the first constellation at the top
              transform: "rotate(180deg)",
            }}
          >
            {constellations.map((con, i) => (
              <ConstellationIcon
                key={i}
                index={i}
                constellation={con}
                selectedConstellation={selectedConstellation}
                setSelectedConstellation={setSelectedConstellation}
                element={element}
              />
            ))}
            <img
              src={chapterIcon}
              alt="Chapter Icon"
              className="size-60"
              style={{
                transform: "rotate(180deg)",
                zoom: "1.2",
              }}
            />
          </div>
        </div>
        <ConstellationDetails selectedConstellation={selectedConstellation} />
      </div>
    </AttributeDesktopContainer>
  );
}
