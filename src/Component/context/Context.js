import React, { createContext, useEffect, useState } from "react";

export const data = createContext();

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

export const Context = ({ children }) => {
  const [cart, setCart] = useState(getLocalItmes());
  const [price, setPrice] = useState(0);
  const [icon, setIcon] = useState();
  const [show, setShow] = useState("true");

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };  

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };  

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;
    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };

  const handleIcon = () => {
    const num = cart.length;
    setIcon(num);
  };



  return (
    <data.Provider
      value={{
        cart,
        setCart,
        handleRemove,
        handlePrice,
        price,
        setPrice,
        icon,
        setIcon,
        handleClick,
        handleChange,
        handleIcon,show,setShow
      }}
    >
      {children}
    </data.Provider>
  );
};

export default Context;
