import StatsItem from "../StatsItem";
import statsData from "/data/statsData.json";
import "./index.scss";

function BenefitCard({ number, title, text }) {
  return (
    <div className="benefit-card">
      <span>{number}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default BenefitCard;
