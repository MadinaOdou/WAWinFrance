import BenefitCard from "../BenefitCard";
import benefits from "/data/benefits.json";
import palette from "/assets/palette.png";
import "./index.scss";

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <h2>Привилегии для участниц</h2>
      <h3>
        Давайте развиваться вместе! Вступайте в ассоциацию,принимайте участие в
        наших мероприятиях и получайте доступ ко всем привилегиям
      </h3>
      <div className="benefits-container flex-column">
        {benefits.map((data, index) => (
          <BenefitCard
            key={index}
            number={data.number}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
      <img
        className="benefits-image"
        src={palette}
        alt="Palette Women at Work"
      />
    </section>
  );
}

export default Benefits;
