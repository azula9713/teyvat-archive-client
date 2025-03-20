interface IBaseArtifact {
  id: number;
  name: string;
  eqipType: string;
  icon: string;
  stars: number;
  set: IBaseArtifactSet;
}

interface IBaseArtifactSet {
  id: number;
  name: string;
  icon: string;
}
