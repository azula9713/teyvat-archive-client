import { useEffect, useState } from "react";

import DesktopContainer from "../containers/desktopContainer";
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
    <DesktopContainer title={`Constellation - ${consName}`}>
      <div className="w-full flex items-start justify-between">
        <div className="w-full flex flex-col items-center justify-start pb-40">
          <div
            className="mt-60 min-h-max flex items-center justify-center w-full"
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
              className="w-80 h-80"
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </div>
        </div>
        <ConstellationDetails selectedConstellation={selectedConstellation} />
      </div>
    </DesktopContainer>
  );
}
