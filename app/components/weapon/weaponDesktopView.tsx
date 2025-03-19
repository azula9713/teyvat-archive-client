import rarityBgPicker from "~/utils/rarityBgPicker";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import RarityStars from "../common/rarityStars";
import TitleHeading from "../common/typography/titleHeading";
import WeaponProfileDesktop from "./weaponProfile/weaponProfileDesktop";

type Props = {
  weapon: IWeapon;
};

function WeaponDesktopView({ weapon }: Readonly<Props>) {
  const { name, stars, icon, awakenIcon, splashImage } = weapon;

  const TAB_NAV = [
    {
      name: "Stats",
      id: "stats",
    },
    {
      name: "Refinement",
      id: "refinement",
    },
  ];

  return (
    <div className="py-4 px-12 flex-col items-center justify-start space-y-8 hidden xl:flex w-full overflow-hidden">
      <LazyBackgroundImage
        img={rarityBgPicker(stars)}
        isDarkened
        className="hidden xl:flex w-[calc(100%-3rem)] flex-col items-start justify-start p-10 xl:h-[650px] rounded-4xl"
      >
        <WeaponProfileDesktop {...{ weapon }} />
      </LazyBackgroundImage>
    </div>
  );
}

export default WeaponDesktopView;
