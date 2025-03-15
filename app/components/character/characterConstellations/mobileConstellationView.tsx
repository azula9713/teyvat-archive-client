import AttributeMobileContainer from "../../layout/container/attributeMobileContainer";
import DataItemCard from "../dataItemCard";

type Props = {
  constellations: IConstellation[];
  constellation: string;
  chapterIcon: string;
};

export default function MobileConstellationView({
  constellations,
  constellation,
  chapterIcon,
}: Readonly<Props>) {
  return (
    <AttributeMobileContainer title={constellation}>
      <div className="w-full flex items-center justify-center">
        <img src={chapterIcon} alt={constellation} className="h-48 w-48" />
      </div>
      <div className="w-full flex flex-col items-start justify-center">
        {constellations.map((con, i) => (
          <DataItemCard item={con} key={con.id} index={i} />
        ))}
      </div>
    </AttributeMobileContainer>
  );
}
