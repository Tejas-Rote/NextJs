import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
export default function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />;
    </Fragment>
  );
}
