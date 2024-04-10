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
    <header className="header d-flex flex-row fixed-top">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo Women at Work" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">
                  Про нас
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Участие
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Мероприятия
                </a>
              </li>
            </ul>
          </div>
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
