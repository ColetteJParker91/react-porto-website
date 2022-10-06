import React from "react";
import "./certification.css";
import { BsCheck } from "react-icons/bs";

const Certification = () => {
  return (
    <section id="certification">
      <h5>What certificates I have</h5>
      <h2>Certification</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Management</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                People Management Skills from CIPD - Chartered Institute of
                Personnel and Development
              </p>
            </li>
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                Management and Leadership: Leading a Team from The Open
                University and The Open University Business School
              </p>
            </li>
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                Management and Leadership: Well-being and Welfare at Work from
                The Open University and The Open University Business School
              </p>
            </li>
          </ul>
        </article>
        {/*End of Management*/}
        <article className="service">
          <div className="service_head">
            <h3>Digital Healthcare</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                Digital Health for Cancer Management: Smart Health Technologies
                in Complex Diseases from Taipei Medical University
              </p>
            </li>
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                Protecting Health Data in the Modern Age: Getting to Grips with
                the GDPR from University of Groningen
              </p>
            </li>
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                Future-proofing the Health Workforce from Griffith University
              </p>
            </li>
          </ul>
        </article>
        {/*End of Digital health*/}
        <article className="service">
          <div className="service_head">
            <h3>Miscellaneous</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_lis-icon" />
              <p> BA(Hons) English Literature from Birmingham City</p>
            </li>
            <li>
              <BsCheck className="service_lis-icon" />
              <p> Full-Stack Web Development from Career Foundry</p>
            </li>
            <li>
              <BsCheck className="service_lis-icon" />
              <p>
                {" "}
                Effective Questioning for Call Handlers from UEA (University of
                East Anglia)
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Certification;
