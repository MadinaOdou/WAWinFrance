import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

function StatsItem({ iconName, number, description }) {
  return (
    <div className="stats-item">
      <FontAwesomeIcon icon={{ iconName }} />
      <span>{number}</span>
      <p>{description}</p>
    </div>
  );
}

export default StatsItem;
