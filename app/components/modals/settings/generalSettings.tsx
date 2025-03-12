import { useAtom } from "jotai";

import {
  useFilterTravelersAtom,
  useImageFetchOptimizerAtom,
  useSelectedTravelerAtom,
} from "~/atoms/feature.atoms";
import DropdownItem from "./dropDownItem";
import ToggleItem from "./toggleItem";

export default function GeneralSettings() {
  const [useImageFetchOptimizer, setUseImageFetchOptimizer] = useAtom(
    useImageFetchOptimizerAtom
  );
  const [useFilterTravelers, setUseFilterTravelers] = useAtom(
    useFilterTravelersAtom
  );
  const [useSelectedTraveler, setUseSelectedTraveler] = useAtom(
    useSelectedTravelerAtom
  );

  return (
    <div className="flex flex-col space-y-4">
      <ToggleItem
        value={useImageFetchOptimizer}
        setValue={setUseImageFetchOptimizer}
        id="imageOptimizer"
        label="Use Image Fetch Optimizer"
        description="If some images are not loading, try enabling this."
      />
      <ToggleItem
        value={useFilterTravelers}
        setValue={setUseFilterTravelers}
        id="filterTravelers"
        label="Filter Travelers"
      />
      <DropdownItem
        value={useSelectedTraveler}
        setValue={setUseSelectedTraveler}
        id="traveler"
        isDisabled={!useFilterTravelers}
        label="Traveler"
        options={[
          { value: "PlayerBoy", label: "Aether" },
          { value: "PlayerGirl", label: "Lumine" },
        ]}
      />
    </div>
  );
}
