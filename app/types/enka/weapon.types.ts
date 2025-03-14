interface IBaseWeapon {
  id: string;
  name: string;
  enkaId: number;
}

interface IWeaponData {
  rankLevel: number;
  weaponBaseExp: number;
  skillAffix: number[];
  weaponProp: {
    propType: string;
    initValue: number;
    type: string;
  }[];
}

interface IBasicWeapon extends IBaseWeapon {
  icon: string;
  awakenIcon: string;
  stars: number;
  weaponType: IWeaponType;
  series: string;
}

interface IWeapon extends IBasicWeapon {
  description: string;
  splashImage: string;
  series: string;
  data: IWeaponData;
}

interface IBaseWeaponSeries {
  [key: string]: IBaseWeapon[];
}
