import React, { useEffect, useState } from "react";
import "../Cart/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
    {cart.map((item) => (
      <div className="cart_box" key={item.id}>
        <div className="cart_img">
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
