import { useEffect, useState } from "react";

import PageTitle from "~/components/common/typography/pageTitle";
import Carousel from "~/components/home/carousel/carousel";
import OtherEvents from "~/components/home/events/otherEvents";
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
  const [otherEventItems, setOtherEventItems] = useState<IEvent[]>([]);

  useEffect(() => {
    //  "title": "Event Wish - Tempestuous Destiny",
    const filterWishEvents = events.filter((event) =>
      event.title.includes("Event Wish")
    );

    const filterOtherEvents = events.filter(
      (event) =>
        !event.title.includes("Event Wish") && !event.title.includes("Update")
    );

    setWishEventItems(filterWishEvents);
    setOtherEventItems(filterOtherEvents);
  }, [events]);

  // auto slide

  return (
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
      <PageTitle title="Welcome to Teyvat Archive" />

      <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
        <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
          <Carousel items={wishEventItems} />
        </div>
        <OtherEvents events={otherEventItems} />
      </div>
    </div>
  );
}
