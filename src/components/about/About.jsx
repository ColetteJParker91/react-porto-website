import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Certification</h5>
              <small>Career Foundry Full Stack Web Development</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I’m a full stack web developer with a background in digital
            healthcare. I transitioned to software development because of my
            understanding of user experience and strong sense of curiosity that
            makes me want to develop my own technical solutions. Recent roles in
            medical startups have satisfied my desire to develop products that
            are helpful in customers day to day life.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
