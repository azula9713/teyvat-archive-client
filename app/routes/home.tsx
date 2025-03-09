import { useEffect, useState } from "react";
import PageTitle from "~/components/common/typography/pageTitle";
import Carousel from "~/components/home/carousel/carousel";
import { getAllEvents } from "~/services/teyvatServer/teyvatArchive.service";
import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Teyvat Archive" },
    { name: "description", content: "Welcome to Tevyat Archive!" },
  ];
}

export async function loader() {
  const events: IEvent[] = await getAllEvents();
  return { events };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Home({ loaderData }: Readonly<Route.ComponentProps>) {
  const { events } = loaderData;

  const [wishEventItems, setWishEventItems] = useState<IEvent[]>([]);

  const handleNext = () => {
    setWishEventItems((prevItems) => {
      const newItems = [...prevItems] as any;
      newItems.push(newItems.shift()); // Move first item to end
      return newItems;
    });
  };

  const handlePrev = () => {
    setWishEventItems((prevItems) => {
      const newItems = [...prevItems] as any;
      newItems.unshift(newItems.pop()); // Move last item to start
      return newItems;
    });
  };

  useEffect(() => {
    //  "title": "Event Wish - Tempestuous Destiny",
    const filterWishEvents = events.filter((event) =>
      event.title.includes("Event Wish")
    );

    setWishEventItems(filterWishEvents);
  }, [events]);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
      <PageTitle title="Welcome to Teyvat Archive" />

      <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
        <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
          <Carousel
            items={wishEventItems}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      </div>
    </div>
  );
}
