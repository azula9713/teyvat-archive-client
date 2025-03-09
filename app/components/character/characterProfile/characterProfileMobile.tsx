import AnemoBG from "~/assets/images/bgs/constellation_template__anemo.jpg";
import CryoBG from "~/assets/images/bgs/constellation_template__cryo.jpg";
import DendroBG from "~/assets/images/bgs/constellation_template__dendro.jpg";
import ElectroBG from "~/assets/images/bgs/constellation_template__electro.jpg";
import GeoBG from "~/assets/images/bgs/constellation_template__geo.jpg";
import HydroBG from "~/assets/images/bgs/constellation_template__hydro.png";
import PyroBG from "~/assets/images/bgs/constellation_template__pyro.jpg";
import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import RarityStars from "../rarityStars";

type Props = {
  charName: string;
  stars: number;
  spalshImage: string;
  element: IElementType;
};

export default function CharacterProfileMobile({
  charName,
  stars,
  spalshImage,
  element,
}: Readonly<Props>) {
  const elementalBgPicker = {
    Dendro: DendroBG,
    Geo: GeoBG,
    Anemo: AnemoBG,
    Hydro: HydroBG,
    Pyro: PyroBG,
    Cryo: CryoBG,
    Electro: ElectroBG,
  };

  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={elementalBgPicker[element]}
    >
      <LazyBackgroundImage
        className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end rounded-lg"
        img={spalshImage}
      >
        <div className="flex flex-col items-start w-full pl-4">
          <RarityStars stars={stars} />
          <h2
            className="font-algoindeEnka pb-2 text-2xl md:text-4xl drop-shadow-2xl text-white"
            style={{
              textShadow: "2px 2px black",
            }}
          >
            {charName}
          </h2>
        </div>
      </LazyBackgroundImage>
    </LazyBackgroundImage>
  );
}
