import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ganesh P C
      </a>
      <div className="container footer__container">
        <ul className="premalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <div className="footer__copyright">
          <small>&copy; 2024 Ganesh P C All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
