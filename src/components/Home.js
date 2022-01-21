import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";

function Home() {
  return (
    <nav className="content">
      <h2 className="mensagem">My HortiFruti!!</h2>
      <ul className="lista">
        {/* <li className="listitem">
          <Link to="/inicio" className="link">
            <h3 className="navbarelements">
              <AiOutlineHome /> Home
            </h3>
          </Link>
        </li> */}

        <li className="listitem">
          <Link to="/produtos" className="link">
            <h3 className="navbarelements">
              <GiFruitBowl /> Products
            </h3>
          </Link>
        </li>

        <li className="listitem">
          <Link to="/carrinho" className="link">
            <h3 className="navbarelements">
              <AiOutlineShoppingCart /> Cart
            </h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
