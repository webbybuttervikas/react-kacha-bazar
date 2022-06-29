import React, { useContext, useEffect, useState } from "react";
import "../Cart/Cart.css";
import { data } from "../context/Context";

const Cart = ({}) => {

const {cart,handleChange,handleRemove,price} = useContext(data)  


  return (
    <article>
    {cart.map((item) => (
      <div className="cart_box" key={item.id}>
        <div className="">
          <p>{item.product}</p>
        </div>
        <div>
          <button className="btn btn-primary"  onClick={() => handleChange(item, 1)}>+</button>
          <button type="button" className="btn btn-outline-secondary">{item.quantity}</button>
          <button className="btn btn-primary" onClick={() => handleChange(item, -1)}>-</button>
        </div>
        <div>
          <button type="button" className="btn btn-outline-secondary mx-5">{item.price} $</button>
          <button type="button" className="btn btn-danger mx-5" onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      </div>
    ))}
    <div className="total">
      <span className="text111">Total Price of your Cart</span>
      <span className="text111 mx-5">$  {price}</span>
    </div>
  </article>
);
};

export default Cart;
