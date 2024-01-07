import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello, I'm</h4>
        <h1>
          <span className="myName__letter textShadow">G</span>
          <span className="myName__letter">a</span>
          <span className="myName__letter">n</span>
          <span className="myName__letter">e</span>
          <span className="myName__letter">s</span>
          <span className="myName__letter">h</span>
          <span> </span>
          <span className="myName__letter">P</span>
          <span className="myName__letter">C</span>
        </h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <button></button>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
