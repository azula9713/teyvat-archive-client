import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

type Props = {
  items: IEvent[];
};

export default function Carousel({ items }: Readonly<Props>) {
  const [carouselItems, setCarouselItems] = useState<IEvent[]>(items);

  const handlePrev = () => {
    setCarouselItems((prevItems) => {
      const newItems = [...prevItems] as any;
      newItems.unshift(newItems.pop()); // Move last item to start
      return newItems;
    });
  };

  const handleNext = () => {
    setCarouselItems((prevItems) => {
      const newItems = [...prevItems] as any;
      newItems.push(newItems.shift()); // Move first item to end
      return newItems;
    });
  };

  useEffect(() => {
    setCarouselItems(items);
  }, [items]);

  return (
    <div className="relative w-[calc(100vw/12*10)] h-[calc(100vw/12*5)] max-w-[1000px] max-h-[500px] shadow-[0_3px_10px_rgba(0,0,0,0.3)] overflow-hidden grid place-items-center rounded-xl">
      <ul className="list-none p-0 m-0">
        {carouselItems.map((item, index) => (
          <li
            key={index}
            className="absolute -translate-y-1/2 z-[1] rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)] left-0 w-full h-full transform-none opacity-100"
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
          className="btn bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] m-[0_0.25rem] p-1 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.3)]"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          className="btn bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] m-[0_0.25rem] p-1 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.3)]"
          onClick={handleNext}
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </nav>
    </div>
  );
}
