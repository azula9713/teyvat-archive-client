import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

type Props = {
  items: IEvent[];
  handleNext: () => void;
  handlePrev: () => void;
};

export default function Carousel({
  items,
  handleNext,
  handlePrev,
}: Readonly<Props>) {
  return (
    <div className="relative w-[1000px] h-[500px] shadow-[0_3px_10px_rgba(0,0,0,0.3)] overflow-hidden grid place-items-center rounded-xl">
      <ul className="list-none p-0 m-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={`
              absolute top-1/2 -translate-y-1/2 z-[1]
             
              rounded-[20px]
              shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)]
              transition-[transform_0.1s,left_0.75s,top_0.75s,width_0.75s,height_0.75s]
              ${
                index === 0 || index === 1
                  ? "left-0 top-0 w-full h-full transform-none rounded-none shadow-none opacity-100"
                  : ""
              }
              ${index === 2 ? "left-1/2" : ""}
              ${index === 3 ? "left-[calc(50%+120px)]" : ""}
              ${index === 4 ? "left-[calc(50%+220px)]" : ""}
              ${index === 5 ? "left-[calc(50%+330px)] opacity-0" : ""}
            `}
            style={{
              backgroundImage: `url('${item.imageUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </ul>
      <nav className="absolute bottom-5 right-5 z-[5] select-none">
        <button
          className="btn bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] m-[0_0.25rem] p-3 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.3)]"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          className="btn bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] m-[0_0.25rem] p-3 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.3)]"
          onClick={handleNext}
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </nav>
    </div>
  );
}
