import group from "/assets/collective.webp";
import "./index.scss";

function About() {
  return (
    <section className="about" id="about">
      <h2>Про нас</h2>
      <h3>Будем очень рады новым участницам ассоциации!</h3>
      <div className="about-content flex-column">
        <div className="about-content--image">
          <img src={group} alt="Group photo of community" />
        </div>
        <div className="about-content--text">
          <p>
            Участницы приходят к нам для того, чтобы расширять свой{" "}
            <strong>нетворкинг</strong>, общаться с такими же успешными и
            целеустремленными женщинами, встречаться и делиться опытом
            <span>работы и построения карьеры в европейских странах</span>.
          </p>
          <p>
            Также в нашем сообществе много интересного для тех, кто только{" "}
            <span>планирует переехать во Францию</span> и хочет морально к этому
            подготовиться.
          </p>
        </div>
      </div>
      <h4>Мы помогаем друг другу в любых вопросах, касающихся работы</h4>
      <div className="about-items flex-column">
        <div className="about-items--point flex-row">
          <span></span>
          <p>Составления CV</p>
        </div>
        <div className="about-items--point flex-row">
          <span></span>
          <p>Прохождения собеседований</p>
        </div>
        <div className="about-items--point flex-row">
          <span></span>
          <p>Спорных рабочих ситуаций</p>
        </div>
        <div className="about-items--point flex-row">
          <span></span>
          <p>Общения на работе</p>
        </div>
      </div>
    </section>
  );
}

export default About;
