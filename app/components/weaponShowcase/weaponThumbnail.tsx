import { NavLink } from "react-router";
import ThumbnaiContainer from "../layout/container/thumbnailContainer";
import rarityParser from "~/utils/parsers/rarityParser";

type Props = {
  weapon: IBaseWeapon;
};

export default function WeaponThumbnail({ weapon }: Props) {
  return (
    <ThumbnaiContainer name={weapon.name} rarity={rarityParser(weapon.stars)}>
      <NavLink to={`/weapon/${weapon.id}`}>
        <div className="w-full flex flex-col items-center mt-1">
          <div className="h-3/4 flex items-end justify-center">
            <img src={weapon.icon} alt={weapon.id} />
          </div>
        </div>
      </NavLink>
    </ThumbnaiContainer>
  );
}
