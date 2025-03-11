import { useAtom } from "jotai";
import { useImageFetchOptimizerAtom } from "~/atoms/feature.atoms";
import ToggleItem from "./toggleItem";

type Props = {};

export default function GeneralSettings({}: Props) {
  const [useImageFetchOptimizer, setUseImageFetchOptimizer] = useAtom(
    useImageFetchOptimizerAtom
  );

  return (
    <div>
      <ToggleItem
        value={useImageFetchOptimizer}
        setValue={setUseImageFetchOptimizer}
        id="imageOptimizer"
        label="Use Image Fetch Optimizer"
      />
    </div>
  );
}
