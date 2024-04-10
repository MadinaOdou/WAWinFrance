import "./index.scss";

// eslint-disable-next-line react/prop-types
function StatsItem({ imgSrc, imgAlt, number, description }) {
  return (
    <div className="stats-item flex-column">
      <img src={imgSrc} alt={imgAlt} />
      <span>{number}</span>
      <p>{description}</p>
    </div>
  );
}

export default StatsItem;
