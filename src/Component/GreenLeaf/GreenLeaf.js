import React, { useState } from "react";
import greenleaf from "../images/GreenLeaf.jpg";
import "./GreenLeaf.css";
import list from "../Data/Data";
import { StepIcon } from "@mui/material";

const GreenLeaf = ({ item, handleClick, handleIcon, icon, SetIcon }) => {
  const { id, quantity, product, price } = item;

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
          <i
            className="icon1 fa-solid fa-bag-shopping"
            onClick={() => {
              handleClick(item);
              handleIcon();
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default GreenLeaf;
