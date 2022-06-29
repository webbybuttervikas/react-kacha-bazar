import React, { useContext, useEffect, useState } from "react";
import { data } from "../context/Context";
import greenleaf from "../images/GreenLeaf.jpg";
import "./GreenLeaf.css";

const GreenLeaf = ({item}) => {
  const { id, quantity, product, price } = item;
  const {handleClick,handleIcon} = useContext(data)
  const [buttontext, setButtontext] = useState("Add To Cart");

  const handleText = () => {
    setButtontext("Item Added");
  };

  return (
    <>
      <div className="col">
        <div className="boxx11">
          <div className="d-flex pt-4 justify-content-center">
            <img src={greenleaf}></img>
          </div>
          <span className="quantity mx-2 d-block">{quantity}</span>
          <span className="productname mx-2 d-block">{product}</span>
          <span className="currency mx-2 my-5 d-inline">{price} $</span>
          <button
            onClick={() => {
              handleClick(item);
              handleIcon();
              handleText();
            }}
            className="button111 px-2 "
          >
            <span className="textin">{buttontext}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default GreenLeaf;
