import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_d3tdchi",
      "template_u57eqee",
      form.current,
      "DcOJGRffxyfClIOtd"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>colette.joy.parker@gmail.com</h5>
            <a href="mailto:colette.joy.parker@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact_option">
            <GrLinkedin className="contact_option-icon" />
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
            <SiWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>Message and Calls</h5>
            <a
              href="https://api.whatsapp.com/send?phone=491794274187"
              target="_blank"
            >
              Send me a whatsapp
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
