import "./index.scss";

function EventCard({ imgSrc, imgAlt, title, date, description, url }) {
  return (
    <div className="event-card flex-column">
      <img src={imgSrc} alt={imgAlt} />
      <div>
        <h4>{title}</h4>
        <span>{date}</span>
        <p>{description}</p>
        <a href={url} target="_blank">
          Узнать больше
        </a>
      </div>
    </div>
  );
}

export default EventCard;
