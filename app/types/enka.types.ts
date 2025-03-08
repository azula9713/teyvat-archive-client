export type IRarityType =
  | "QUALITY_PURPLE"
  | "QUALITY_ORANGE"
  | "QUALITY_ORANGE_SP";

export type IElementType =
  | "Anemo"
  | "Geo"
  | "Electro"
  | "Dendro"
  | "Hydro"
  | "Pyro"
  | "Cryo";

export type IWeaponType =
  | "WEAPON_SWORD_ONE_HAND"
  | "WEAPON_CLAYMORE"
  | "WEAPON_POLE"
  | "WEAPON_CATALYST"
  | "WEAPON_BOW";

  export type IBodyType = "BODY_MALE" | "BODY_BOY" | "BODY_LADY" | "BODY_GIRL" | "BODY_LOLI";

export interface IConstellation {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface IAscensionData {
  scoinCost: number;
  costItems: [
    {
      id: number;
      count: number;
    }
  ];
  addProps: [propType: string];
}

export interface IBirthday {
  month: number;
  day: number;
}

export interface ITalent {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface IAllTalent extends ITalent {
  isPassive: boolean;
}

export interface IBaseCharacter {
  element: IElementType;
  nameId: string;
  iconUrl: string;
  id: string;
  enkaId: number;
  skillDepotId: string;
  isTraveler: boolean;
  name: string;
  nameCard: string;
  rarity: IRarityType;
}

export interface ICharacter extends IBaseCharacter {
  enkaId: number;
  splashUrl: string;
  constellations: IConstellation[];
  weaponType: IWeaponType;
  stars: number;
  location: string;
  description: string;
  constellation: string;
  constellationIcon: string;
  skills: ITalent[];
  sideIcon: string;
  passiveTalents: ITalent[];
  ascensionData: IAscensionData[];
  title: string;
  birthday: IBirthday | null;
  bodyType: IBodyType;
}

export interface IMaterialData {
  id: number;
  name: string;
  description: string;
  icon: string;
  materialType: string;
  itemType: string;
  stars: number;
}
