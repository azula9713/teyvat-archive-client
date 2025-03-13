import aetherSplashImage from "~/assets/images/traveler/aether-nobg.png";
import lumineSplashImage from "~/assets/images/traveler/lumine-nobg.png";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL as string;

const transformCharacterData = (character: ICharacter) => {
  if (!character.isTraveler && !character?.nameCard) return character;

  let nameCard;
  let chapterIcon;
  let splashUrl;

  if (character.isTraveler) {
    const isAether = character.nameId === "PlayerBoy";

    nameCard = `${IMAGE_BASE_URL}/nameCardPicAlpha/UI_NameCardPic_${character.name}.png`;
    chapterIcon = `${IMAGE_BASE_URL}/chapterIcons/UI_ChapterIcon_${character.name}.png`;
    splashUrl = isAether ? aetherSplashImage : lumineSplashImage;
  } else {
    const currentName = character.nameCard?.split("/").pop();
    nameCard = `${IMAGE_BASE_URL}/nameCardPicAlpha/${currentName}`;
    const currentConstellationIcon = character?.constellationIcon
      .split("/")
      .pop()
      ?.replace("Eff_UI_Talent_", "")
      .replace(".png", "");

    chapterIcon = `${IMAGE_BASE_URL}/chapterIcons/UI_ChapterIcon_${currentConstellationIcon}.png`;
    splashUrl = character.splashUrl;
  }

  //Eff_UI_Talent_Ayaka.png Just get the name (remove Eff_UI_Talent_ and .png)
  // new name UI_ChapterIcon_Ayaka.png

  const currentSideIcon = character?.sideIcon.split("/").pop();
  const sideIcon = `https://enka.network/ui/${currentSideIcon}`;

  const updatedCharacter = {
    ...character,
    nameCard,
    splashUrl,
    sideIcon,
    constellationIcon: chapterIcon,
  };

  return updatedCharacter;
};

export { transformCharacterData as transforCharacterData };
