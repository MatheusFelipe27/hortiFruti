import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Produtos.css";
import { ProductContext } from "../App";
import axios from 'axios'
import Inicio from "../components/Inicio";
import Footer from "../components/Footer";

function Produtos() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(ProductContext);

  

  useEffect(() => {
    const config = {'Access-Control-Allow-Origin': '*'}
    axios.get("https://www.fruityvice.com/api/fruit/all", config)
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  const save = ({ id, name }) => {
    if (id in cart){
      setCart({ ...cart, [id]: { name, amount: cart[id].amount + 1 } });
      alert("Product added to the cart");
    } 
    else {
      setCart({ ...cart, [id]: { name, amount: 1 } });
      alert("Product added to the cart");
    }
  };

  //console.log(cart);

  return (
    <div>
      <div className="main">
        <Inicio/>
        <ul className="fruitList">
          {products.map((product, index) => (
            <div key={index} className="box">
              <h3 className="importants">Product name:</h3>
              <li className="elements"> {product.name}</li>
              <h3 className="secondimportants">Nutritional information:</h3>
              <li className="elements">
                Carbohydrates: {product.nutritions.carbohydrates}
              </li>
              <li className="elements"> Protein: {product.nutritions.protein}</li>
              <li className="elements"> Fat: {product.nutritions.fat}</li>
              <li className="elements">
                
                Calories: {product.nutritions.calories}
              </li>
              <li className="elements"> Sugar: {product.nutritions.sugar}</li>
              <button className="button" onClick={() => save(product)}>
                
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>  
  );
}

export default Produtos;
