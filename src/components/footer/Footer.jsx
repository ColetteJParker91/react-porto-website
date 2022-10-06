import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        CJP
      </a>
      <ul className="permalinks">
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
          <a href="#certification">Certification</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/*  <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://twitter.com/Colette_P1" target="_blank">
          <FaTwitterSquare />
        </a>
        <a href="https://github.com/ColetteJParker91" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/colettejoyparker/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://youtu.be/BsyHQgiem8c" target="_blank">
          <BsFillGiftFill />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Colette Parker. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
