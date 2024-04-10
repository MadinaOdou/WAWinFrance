import StatsItem from "../StatsItem";
import statsData from "../../../src/data/statsData.json";
import "./index.scss";

function Stats() {
  return (
    <section className="stats">
      <h2>Языком цифр</h2>
      <h3>
        Давайте развиваться вместе! Вступайте в ассоциацию,принимайте участие в
        наших мероприятиях и получайте доступ ко всем привилегиям
      </h3>
      <div className="stats-container">
        {statsData.map((data, index) => (
          <StatsItem
            key={index}
            imgSrc={data.icon}
            imgAlt={data.imgAlt}
            number={data.number}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Stats;
