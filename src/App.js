import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect } from "react";
import "./App.css";
import CardComp1 from "./Component/CardComp1/CardComp1";
import Cart from "./Component/Cart/Cart";
import { data } from "./Component/context/Context";
import DailyNeedBanner from "./Component/DailyNeedBanner/DailyNeedBanner";
import DailyShopping from "./Component/DailyShopping/DailyShopping";
import FeaturedCategories from "./Component/FeaturedCategories/FeaturedCategories";
import Footer from "./Component/Footer/Footer";
import Nav2 from "./Component/Nav2/Nav2";
import Navbarr from "./Component/Navbar.js";

function App() {
  const {
    cart,
    handlePrice
    ,handleIcon,
    show
  } = useContext(data);

  useEffect(() => {
    handleIcon();
  }, [cart]);

  useEffect(() => {
    handlePrice();
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(cart));
  }, [cart]);



  return (
    <div className="App">
      <Navbarr/>
      { show ? (
        <>
          <Nav2 />
          <CardComp1 />
          <FeaturedCategories />
          <DailyShopping/>
          <DailyNeedBanner />
          <Footer />
        </>
      ) : (
       <Cart/>
      )}

    </div>
  );
}

export default App;
