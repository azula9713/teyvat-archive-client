import {
  ComputerDesktopIcon,
  GlobeAltIcon,
  WrenchIcon,
} from "@heroicons/react/16/solid";
import GeneralSettings from "~/components/modals/settings/generalSettings";

const SETTINGS_ITEMS = [
  {
    id: "general",
    title: "General",
    icon: WrenchIcon,
    content: GeneralSettings,
  },
  {
    id: "display",
    title: "Display",
    icon: ComputerDesktopIcon,
  },
  {
    id: "language",
    title: "Language & Region",
    icon: GlobeAltIcon,
  },
];

export { SETTINGS_ITEMS };
