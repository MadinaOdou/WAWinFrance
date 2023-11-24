import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/waw-logo.png";
import "./index.scss";

function Header() {
  return (
    <header className="header flex-row">
      <img src={logo} alt="Logo Women at Work" />
      <nav>
        <a href="">Про нас</a>
        <a href="">Участие</a>
        <a href="">Мероприятия</a>
      </nav>
      <div className="header-icons">
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
    </header>
  );
}

export default Header;
