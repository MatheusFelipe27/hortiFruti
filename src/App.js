import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import { createContext, useMemo } from "react";

export const ProductContext = createContext({
  cart: {},
  setCart: () => {},
});

function App() {
  const [cart, setCart] = useState({});
  const value = useMemo(() => ({ cart, setCart }), [cart]);

  return (
    <ProductContext.Provider value={value}>
      <div>
        <Router>
          <Home />
          <Routes>
            {/* <Route path= "/" element= {<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>}/> */}
            <Route path= "/" element = {<Produtos/>} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </Router>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
