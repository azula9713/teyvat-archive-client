import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

import CarouselItem from "./carouselItem";
import CarouselNavButton from "./carouselNavButton";

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
          <CarouselItem key={index} imageUrl={item.imageUrl} />
        ))}
      </ul>
      <nav className="absolute bottom-5 right-5 z-[5] select-none">
        <CarouselNavButton
          icon={<ChevronLeftIcon className="size-6" />}
          onClick={handlePrev}
        />

        <CarouselNavButton
          icon={<ChevronRightIcon className="size-6" />}
          onClick={handleNext}
        />
      </nav>
    </div>
  );
}
