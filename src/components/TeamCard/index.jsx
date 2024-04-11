import "./index.scss";

function TeamCard({ imgSrc, imgAlt, name, position, text }) {
  return (
    <div className="team-card flex-column">
      <img src={imgSrc} alt={imgAlt} />
      <h4>{name}</h4>
      <span>{position}</span>
      <p>{text}</p>
    </div>
  );
}

export default TeamCard;
