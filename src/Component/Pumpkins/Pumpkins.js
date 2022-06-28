import React from 'react'
import pump from '../images/pumpkin.png'
import '../Pumpkins/Pumpkins.css'
import greenleaf from "../images/GreenLeaf.jpg";

const Pumpkins = ({items}) => {
  const{id,quantity,product,price} = items;
  return (<>
            <div className="col">
              <div className="boxx11">
              <div className="discount3 discount3text ">
                <p className="d-flex justify-content-center mt-1">17% off</p>
              </div>
                <div className="d-flex pt-4 justify-content-center">
                  <img src={pump}></img>
                </div>
                <span className="quantity mx-2 d-block">{quantity}</span>
                <span className="productname mx-2 d-block">
                  {product}
                </span>
                <span className="currency mx-2 my-5 d-inline">{price}</span>
                <span className="currency mx-2 my-5 d-inline strike">12$</span>
                <i className="icon fa-solid fa-bag-shopping"></i>
              </div>
            </div>
            </>
  )
}

export default Pumpkins