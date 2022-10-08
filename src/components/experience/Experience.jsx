import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Javascript</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Angular</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Typescript</h4>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>PostgresSQL</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details-icon" />
              <h4>Postman</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
