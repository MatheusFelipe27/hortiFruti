import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./CartFooter.css";

function CartFooter() {
  return (
    <footer className="CartFooter">
      <h3> Made By Matheus Felipe </h3>
      <ul className="CartFooterList">
        <li className="CartFooterItems">
          <a className="a" href="https://github.com/MatheusFelipe27">
            
            <AiFillGithub />
          </a>
        </li>

        <li className="CartFooterItems">
          <a className="a" href="https://www.linkedin.com/in/matheus-felipe-549838181/">
            
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default CartFooter;
