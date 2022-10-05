import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/colettejoyparker/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ColetteJParker91" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Colette_P1" target="_blank">
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
