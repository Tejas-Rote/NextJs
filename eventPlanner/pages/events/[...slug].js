import { useRouter } from "next/router";
import { getEventById, getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title/results-title";
import { Fragment } from "react";
import Button from "../../components/events/ui/button";
import ErrorAlert from "../../components/events/ui/error-alert/error-alert";
export default function FileteredEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  // console.log(filterData);
  if (!filterData) {
    return <p className="center">Loading.....</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid Filter , please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No events found for choosen filters.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}
