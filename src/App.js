import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState } from "react";
import "./App.css";
import CardComp1 from "./Component/CardComp1/CardComp1";
import Cart from "./Component/Cart/Cart";
import DailyNeedBanner from "./Component/DailyNeedBanner/DailyNeedBanner";
import DailyShopping from "./Component/DailyShopping/DailyShopping";
import FeaturedCategories from "./Component/FeaturedCategories/FeaturedCategories";
import Footer from "./Component/Footer/Footer";
import Nav2 from "./Component/Nav2/Nav2";
import Navbarr from "./Component/Navbar.js";

function App() {
  const [show, setShow] = useState("true");
  const [cart, setCart] = useState([]);
  const [icon, setIcon] = useState(0);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d
    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };

  const handleIcon = () =>{
    
    setIcon(icon + 1);
  }

  


  return (
    <div className="App">
      <Navbarr setShow={setShow} cart={cart} setCart={setCart} icon={icon} />
      {show ? (
        <>
          <Nav2 />
          <CardComp1 />
          <FeaturedCategories />
          <DailyShopping handleClick={handleClick} handleIcon={handleIcon} icon={icon} />
          <DailyNeedBanner />
          <Footer />
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}


    </div>
  );
}

export default App;
