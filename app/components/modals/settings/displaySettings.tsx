import { useAtom } from "jotai";
import { useEffect } from "react";

import { selectedModeAtom } from "~/atoms/general.atoms";
import ToggleItem from "~/components/common/basic/toggleItem";

export default function DisplaySettings() {
  const [selectedMode, setSelectedMode] = useAtom(selectedModeAtom);

  useEffect(() => {
    console.log("selectedMode", selectedMode);
  }, [selectedMode]);

  return (
    <div className="flex flex-col space-y-3">
      <ToggleItem
        id="darkMode"
        label="Dark Mode"
        value={selectedMode === "dark"}
        setValue={(value) => setSelectedMode(value ? "dark" : "light")}
      />
    </div>
  );
}
