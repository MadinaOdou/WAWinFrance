import TeamCard from "../TeamCard";
import teamMembers from "/data/teamMembers.json";
import "./index.scss";

function Team() {
  return (
    <section className="team">
      <h2>Команда</h2>
      <h3>
        За каждым проектом стоит целая команда. Woman at work in France – не
        исключение
      </h3>
      <div className="team-container flex-column">
        {teamMembers.map((data, index) => (
          <TeamCard
            key={index}
            imgSrc={data.imgSrc}
            imgAlt={data.imgAlt}
            name={data.name}
            position={data.position}
            text={data.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
