const FEATURES = [
  {
    id: "useImageFetchOptimizer",
    headerName: "X-Use-Image-Optimizer",
    value: true,
  },
  {
    id: "useFilterTravelers",
    headerName: "X-Use-Filter-Travelers",
    value: true,
  },
  {
    id: "useSelectedTraveler",
    headerName: "X-Use-Selected-Traveler",
    value: "PlayerBoy",
  },
  {
    id: "useCarouselAutoPlay",
    headerName: "X-Use-Carousel-Auto-Play",
    value: true,
  },
  {
    id: "useCarouselInterval",
    headerName: "X-Use-Carousel-Interval",
    value: 3000,
  },
];

export function syncInitialValues() {
  for (const feature of FEATURES) {
    const existValue = localStorage.getItem(feature.id);
    if (existValue === null) {
      localStorage.setItem(feature.id, feature.value.toString());
    }
  }
}

export const appendHeaders = (
  _input: RequestInfo | URL,
  init?: RequestInit
) => {
  syncInitialValues();
  const headers = new Headers(init?.headers);

  FEATURES.forEach((feature) => {
    const value = localStorage.getItem(feature.id) === "true" || false;
    if (value !== null) {
      headers.set(feature.headerName, value.toString());
    }
  });

  return { ...init, headers };
};
