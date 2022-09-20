import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="ui-container">
        <div>
          <a
            className="ui-link"
            href="https://www.instagram.com/kenny_died/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            className="ui-link"
            href="https://github.com/Kenichi-power/cv-builder"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
