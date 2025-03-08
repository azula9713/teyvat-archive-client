import AnemoSVG from "../assets/images/elements/Element_Anemo.svg";
import CryoSVG from "../assets/images/elements/Element_Cryo.svg";
import DendroSVG from "../assets/images/elements/Element_Dendro.svg";
import ElectroSVG from "../assets/images/elements/Element_Electro.svg";
import GeoSVG from "../assets/images/elements/Element_Geo.svg";
import HydroSVG from "../assets/images/elements/Element_Hydro.svg";
import PyroSVG from "../assets/images/elements/Element_Pyro.svg";

import AnemoBg from "~/assets/images/bgs/constellation_template__anemo.jpg";
import CryoBg from "~/assets/images/bgs/constellation_template__cryo.jpg";
import DendroBg from "~/assets/images/bgs/constellation_template__dendro.jpg";
import ElectroBg from "~/assets/images/bgs/constellation_template__electro.jpg";
import GeoBg from "~/assets/images/bgs/constellation_template__geo.jpg";
import HydroBg from "~/assets/images/bgs/constellation_template__hydro.png";
import PyroBg from "~/assets/images/bgs/constellation_template__pyro.jpg";

import type { IElementType } from "~/types/enka.types";

interface ElementalImageFilter {
  [key: string]: string;
  Anemo: string;
  Electro: string;
  Geo: string;
  Dendro: string;
  Hydro: string;
  Pyro: string;
  Cryo: string;
}

const elementalImageFilter: ElementalImageFilter = {
  Anemo: AnemoSVG,
  Electro: ElectroSVG,
  Geo: GeoSVG,
  Dendro: DendroSVG,
  Hydro: HydroSVG,
  Pyro: PyroSVG,
  Cryo: CryoSVG,
};

export default elementalImageFilter;

export const elementalBackgroundPicker = (element: IElementType) => {
  switch (element) {
    case "Anemo":
      return AnemoBg;
    case "Electro":
      return ElectroBg;
    case "Geo":
      return GeoBg;
    case "Dendro":
      return DendroBg;
    case "Hydro":
      return HydroBg;
    case "Pyro":
      return PyroBg;
    case "Cryo":
      return CryoBg;
    default:
      return AnemoBg;
  }
};
