import { useAtom } from "jotai";
import { selectedElementAtom } from "~/atoms/teyvat.atom";
import { ELEMENTS } from "~/data/teyvatData";
import elementalImageFilter from "~/utils/elementalImagePicker";

export default function ElementalPicker() {
  const [selectedElement, setSelectedElement] = useAtom(selectedElementAtom);
  return (
    <div className="w-full pt-3 mt-3 mx-2 px-2 flex flex-col items-center">
      <div className="w-full flex items-center justify-center xl:mb-4">
        <h1 className="font-bold my-2 text-3xl xl:text-5xl px-4">
          {`${selectedElement === "all" ? "All" : selectedElement} Characters`}
        </h1>
      </div>
      <div className="w-full flex items-center justify-between pb-3 px-4 mb-3 max-w-[400px]">
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
    </div>
  );
}
