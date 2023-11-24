import statsData from "../../../public/Data/statsData.json";
import StatsItem from "../statsItem";
import "./index.scss";

function Stats() {
  return (
    <section className="stats">
      <h2>Языком цифр</h2>
      <h3>
        Давайте развиваться вместе! Вступайте в ассоциацию,принимайте <br></br>
        участие в наших мероприятиях и получайте доступ ко всем привилегиям
      </h3>
      <div className="stats-container">
        {statsData.map((data, index) => (
          <StatsItem
            key={index}
            iconName={data.icon}
            number={data.number}
            description={data.description}
          />
        ))}
        ;
      </div>
    </section>
  );
}

export default Stats;
