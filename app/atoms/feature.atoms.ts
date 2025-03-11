import { atomWithStorage } from "jotai/utils";

export const useImageFetchOptimizerAtom = atomWithStorage(
  "useImageFetchOptimizer",
  true
);
export const useFilterTravelersAtom = atomWithStorage(
  "useFilterTravelers",
  true
);
export const useCarouselAutoPlayAtom = atomWithStorage(
  "useCarouselAutoPlay",
  false
);
export const useCarouselIntervalAtom = atomWithStorage(
  "useCarouselInterval",
  5000
);
