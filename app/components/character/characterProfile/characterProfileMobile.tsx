import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import RarityStars from "../../common/rarityStars";
import { elementalBackgroundPicker } from "~/utils/elementalImagePicker";

type Props = {
  charName: string;
  stars: number;
  splashImage: string;
  element: IElementType;
};

export default function CharacterProfileMobile({
  charName,
  stars,
  splashImage,
  element,
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={elementalBackgroundPicker(element)}
    >
      <LazyBackgroundImage
        className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end rounded-lg"
        style={{
          zoom: 0.9,
        }}
        img={splashImage}
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
