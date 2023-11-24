import illustration from "../../assets/illustration.png";
import "./index.scss";

function Banner() {
  return (
    <section className="banner flex-row">
      <div className="banner-text flex-column">
        <h1>
          Women at<br></br>work in France
        </h1>
        <p>
          Сообщество женщин во Франции, которые <br></br>заинтересованы в
          профессиональном и <br></br>личностном развитии
        </p>
        <div className="banner-text--rectangle flex-row">
          <div>
            <p>
              8 января 2019 — мы <br></br>создали группу-<br></br>сообщество в
              Facebook
            </p>
          </div>
          <div>
            <p>
              5 октября 2022 – мы <br></br>официально начали свою <br></br>
              работу в качестве ассоциации
            </p>
          </div>
        </div>
      </div>
      <img
        className="banner-image"
        src={illustration}
        alt="Illustration Women at Work"
      />
    </section>
  );
}

export default Banner;
