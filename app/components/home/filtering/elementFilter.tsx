import { memo } from "react";
import { ELEMENTS } from "~/data/teyvatData";
import elementalImageFilter from "~/utils/elementalImagePicker";

type Props = {
  selectedElement: string;
  setSelectedElement: (element: string) => void;
};

function ElementFilter({
  selectedElement,
  setSelectedElement,
}: Readonly<Props>) {
  return (
    <div className="w-full flex items-center justify-between space-x-2 p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg">
      {ELEMENTS.map((element) => (
        <button
          key={element}
          onClick={() => {
            if (selectedElement !== element) {
              setSelectedElement(element);
            } else {
              setSelectedElement("all");
            }
          }}
          className="cursor-pointer"
        >
          <img
            src={elementalImageFilter[element]}
            alt={element}
            className="w-[28px]"
            style={{
              filter:
                selectedElement === element || selectedElement === "all"
                  ? "none"
                  : "grayscale(100%)",
            }}
          />
        </button>
      ))}
    </div>
  );
}

export default memo(ElementFilter);
