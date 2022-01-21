import React, { useContext } from "react";
import "./Carrinho.css";
import { ProductContext } from "../App";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import {AiOutlineArrowDown} from 'react-icons/ai'
import CartFooter from "../components/CartFooter";

function Carrinho() {
  const { cart, setCart } = useContext(ProductContext);

  const deleteAll = () => {
    /*if(Object.keys(cart).length ===0){
      alert("The cart is already empty!!")
    }
    */
    setCart({});
  };

  const deleteProduct = (id) => {
    const copy = {...cart}
    delete copy[id]
    setCart(copy);
  };

  const plus = (id) =>{
    setCart({ ...cart, [id]: { name: cart[id].name, amount: cart[id].amount + 1 }})
  }

  const minus = (id) =>{
    if(cart[id].amount === 1){
      deleteProduct(id)
    }
    else setCart({ ...cart, [id]: { name: cart[id].name, amount: cart[id].amount - 1 }})
    
  }

  return (
    <div>
      <div className="main">
        {Object.keys(cart).length>0  && (
        <button className="deleteAllButton" onClick={deleteAll}>
          
          Clear Cart
        </button>
        )}
        <ul className="secondfruitlist">
          {Object.keys(cart).map((id) => (
            <div key={id} className="box2">
              <h3 className="mainName1">Product name:</h3>
              <p className="arrow"> <AiOutlineArrowDown/> </p>
              <li className="texts1"> {cart[id].name}</li>
              <h3 className="mainName2">Quantity:</h3>
              <p className="arrow2"> <AiOutlineArrowDown/> </p>
              <li className="texts2"> {cart[id].amount}</li>

              <button className="minusButton" onClick={ () => minus(id)}>
                
                <BiMinus />
              </button>
              <button className="plusButton" onClick={ () => plus(id)}>
                
                <BsPlus />
              </button>
              <button
                className="deleteProductButton"
                onClick={() => deleteProduct(id)}
              >
                
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div className="marginzin"></div>
      <CartFooter/>
    </div>  
  );
}

export default Carrinho;
