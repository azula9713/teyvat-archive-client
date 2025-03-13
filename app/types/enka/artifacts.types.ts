interface IBaseArtifact {
  id: number;
  name: string;
  eqipType: string;
  icon: string;
  stars: number;
  set: IBaseSet;
}

interface IBaseSet {
  id: number;
  name: string;
  icon: string;
}
