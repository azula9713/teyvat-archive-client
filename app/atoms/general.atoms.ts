import { atomWithStorage } from "jotai/utils";

export const selectedModeAtom = atomWithStorage("selectedMode", "dark");
