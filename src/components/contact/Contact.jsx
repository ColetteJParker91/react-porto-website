import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>colette.joy.parker@gmail.com</h5>
            <a href="mailto:colette.joy.parker@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact_option">
            <GrLinkedin />
            <h4>Linkedin</h4>
            <h5>Colette Parker</h5>
            <a
              href="https://www.linkedin.com/in/colettejoyparker/"
              target="_blank"
            >
              Send me a message
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp />
            <h4>Whatsapp</h4>
            <h5>Message and Calls</h5>
            <a
              href="https://api.whatsapp.com/send?phone+491794274187"
              target="_blank"
            >
              Send me a whatsapp
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
