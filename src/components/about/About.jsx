import React from "react";
import "./about.css";
import ME from "../../assets/my_pic2_png.png";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__contant">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I'm a tech enthusiast 🌐 with a passion for staying on the cutting
            edge of technology. Currently, I'm diving into the world of Web
            development and exploring its potential for building robust and
            scalable applications. With a knack for learning new technologies
            🚀, I thrive on challenges 💪 and am always eager to gain hands-on
            experience. Let's connect and create something awesome together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
