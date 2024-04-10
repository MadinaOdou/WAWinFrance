import illustration from "../../assets/illustration.png";
import smallbanner from "../../assets/small-illustration.png";
import "./index.scss";

function Banner() {
  return (
    <section className="banner flex-column">
      <div className="banner-text flex-column">
        <h1>Women at work in France</h1>
        <p>
          Сообщество женщин во Франции, которые <br></br>заинтересованы в
          профессиональном и <br></br>личностном развитии
        </p>
      </div>
      <img
        className="banner-image"
        src={illustration}
        alt="Illustration Women at Work"
      />
      <img
        className="banner-small"
        src={smallbanner}
        alt="Illustration Women at Work"
      />
      <div className="banner-text--rectangle flex-column">
        <div>
          <p>8 января 2019 — мы создали группу-сообщество в Facebook</p>
        </div>
        <div>
          <p>
            5 октября 2022 — мы официально начали свою работу в качестве
            ассоциации
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
