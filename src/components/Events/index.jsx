import EventCard from "../EventCard";
import events from "/data/events.json";
import "./index.scss";

function Events() {
  return (
    <section className="events" id="events">
      <h2>Мероприятия</h2>
      <h3>Ближайшиe мероприятия Woman at work in France</h3>
      <div className="events-container flex-column">
        {events.map((data, index) => (
          <EventCard
            key={index}
            imgSrc={data.imgSrc}
            imgAlt={data.imgAlt}
            title={data.title}
            date={data.date}
            description={data.description}
            url={data.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Events;
