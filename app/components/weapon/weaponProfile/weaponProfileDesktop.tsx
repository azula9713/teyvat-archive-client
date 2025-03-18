import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";

type Props = {
  stars: number;
  name: string;
  splashImage: string;
};

function WeaponProfileDesktop({ stars, name, splashImage }: Readonly<Props>) {
  return (
    <>
      <div className="flex w-full m-2">
        <div className="w-1/3 flex flex-col items-start mx-2">
          <div className="flex items-center justify-start space-x-1 mb-5">
            <RarityStars stars={stars} />
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-start mx-2 ">
          <div className="flex w-full items-center justify-end space-x-1 mb-5">
            <TitleHeading text={name} />
          </div>
        </div>
      </div>
      <div className="w-full flex m-2 relative h-full">
        <div className="w-1/3 flex flex-col items-start mx-2 ">
          <img
            src={splashImage}
            alt={name}
            className="absolute bottom-10 left-20"
            style={{
              height: "100%",
              scale: "2",
              rotate: "15deg",
            }}
          />
        </div>
        <div className="w-2/3 flex flex-col items-start mx-2">
          <div className="flex items-center justify-start space-x-1 mb-5"></div>
        </div>
      </div>
    </>
  );
}

export default WeaponProfileDesktop;
