import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3> Made By Matheus Felipe </h3>
      <ul className="footerList">
        <li className="footerItems">
          <a className="a" href="https://github.com/MatheusFelipe27">
            
            <AiFillGithub />
          </a>
        </li>

        <li className="footerItems">
          <a className="a" href="https://www.linkedin.com/in/matheus-felipe-549838181/">
            
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
