import EventItem from "./eventItem";

type Props = {
  events: IEvent[];
};

export default function OtherEvents({ events }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-12 auto-rows-auto">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
