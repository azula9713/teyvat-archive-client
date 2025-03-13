import { NavLink } from "react-router";

import elementalImageFilter from "~/utils/elementalImagePicker";
import ThumbnaiContainer from "../layout/container/thumbnailContainer";

type Props = {
  character: IBaseCharacter;
};

export default function CharacterThumbnail({ character }: Readonly<Props>) {
  return (
    <ThumbnaiContainer name={character.name} rarity={character.rarity}>
      <NavLink
        to={`/character/${character.nameId}-${character.enkaId}-${character.skillDepotId}`}
      >
        <div className="w-full flex flex-col items-center mt-1">
          <div className="h-3/4 flex items-end justify-center">
            <img src={character.iconUrl} alt={character.id} />
          </div>
        </div>
      </NavLink>
      <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
        <img
          src={elementalImageFilter[character.element]}
          alt={character.element}
          className="w-4 h-4 lg:w-5 lg:h-5"
        />
      </div>
    </ThumbnaiContainer>
  );
}
