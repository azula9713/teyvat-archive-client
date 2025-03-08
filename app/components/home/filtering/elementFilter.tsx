import { ELEMENTS } from "~/data/teyvatData";
import elementalImageFilter from "~/utils/elementalImagePicker";

type Props = {
  selectedElement: string;
  setSelectedElement: (element: string) => void;
};

export default function ElementFilter({
  selectedElement,
  setSelectedElement,
}: Readonly<Props>) {
  return (
    <>
      {/* <div className="w-full pb-3 px-4 mb-3 relative sm:hidden">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900 w-full">
          <div className="border-e px-4 py-2 text-sm/none w-full flex items-center justify-between space-x-1 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
            <p className="font-semibold text-lg">
              {selectedElement === "all" ? "All" : selectedElement}
            </p>

            {selectedElement === "all" ? (
              <div className="flex items-center space-x-2">
                {ELEMENTS.map((element) => (
                  <img
                    key={element}
                    src={elementalImageFilter[element]}
                    alt={element}
                    className="w-[20px]"
                  />
                ))}
              </div>
            ) : (
              <img
                src={elementalImageFilter[selectedElement]}
                alt={selectedElement}
                className="w-[28px]"
              />
            )}
          </div>

          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            {isDropdownOpen ? (
              <ChevronUpIcon className="size-5" />
            ) : (
              <ChevronDownIcon className="size-5" />
            )}
          </button>
        </div>
        {isDropdownOpen && (
          <motion.div
            className="p-2 border rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 absolute top-full left-0 w-full z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              <button
                onClick={() => {
                  setSelectedElement("all");
                  setIsDropdownOpen(false);
                }}
                className="flex items-center space-x-2 pb-2 border-b border-gray-200 dark:border-gray-700 w-full"
              >
                <p>All</p>
              </button>
            </div>

            {ELEMENTS.map((element) => (
              <div
                key={element}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                <button
                  onClick={() => {
                    setSelectedElement(element);
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700 w-full"
                >
                  <p
                    className={`${
                      selectedElement === element
                        ? "font-semibold text-slate-300"
                        : ""
                    }`}
                  >
                    {element}
                  </p>
                  <img
                    src={elementalImageFilter[element]}
                    alt={element}
                    className="w-[20px]"
                  />
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div> */}
      <div className="w-full flex items-center justify-between space-x-2 pb-3 px-4 mb-3 max-w-[400px]">
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
    </>
  );
}
