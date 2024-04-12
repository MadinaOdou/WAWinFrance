import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Contact() {
  return (
    <section className="contact">
      <h2>Связаться с нами</h2>
      <div className="contact-container flex-column">
        <div className="contact-container-mail flex-row">
          <FontAwesomeIcon icon={faArrowRightLong} />
          <a href="mailto:womenatwork.infrance@gmail.com" target="_blank">
            womenatwork.infrance@gmail.com
          </a>
        </div>
        <div className="contact-container-icons flex-row">
          <FontAwesomeIcon icon={faArrowRightLong} />
          <a
            title="Подписаться на нашу страницу в Instagram"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/womenatwork_global"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            title="Добавиться в нашу группу в Facebook"
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/groups/womenworkfrance/"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            title="Подписаться на нашу страницу в LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/women-at-work-in-europe/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
