import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className={style.container}>
      <div className={style.head}>
        <div className={style.contact}>
          <h3 className={style.contactTitle}>Contact:</h3>
          <a
            className={style.contactLink}
            href="mailto:drohomyretskyi.oleksandr@gmail.com"
          >
            drohomyretskyi.oleksandr@gmail.com
          </a>
        </div>
        <div className={style.navSection}>
          <h3>Other links:</h3>
          <nav className={style.nav}>
            <a
              href="https://www.freeprivacypolicy.com/live/bd6535ef-85d7-4afc-a3aa-2ca91a5fb519"
              target="_blank"
              className={style.link}
            >
              Privacy Policy
            </a>
            <Link to="about-us" className={style.link}>
              About us
            </Link>
          </nav>
        </div>
      </div>

      <span className={style.copyright}>
        <FontAwesomeIcon icon={faCopyright} /> made with love by Alex Bielow
      </span>
    </footer>
  );
};

export { Footer };
