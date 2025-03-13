interface IBaseWeapon {
  id: string;
  name: string;
  enkaId: number;
}

interface IBasicWeapon extends IBaseWeapon {
  icon: string;
  awakenIcon: string;
  stars: number;
  weaponType: IWeaponType;
  series: string;
}

interface IBaseWeaponSeries {
  [key: string]: IBaseWeapon[];
}
