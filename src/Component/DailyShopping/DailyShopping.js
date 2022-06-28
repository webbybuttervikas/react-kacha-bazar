import React, { useEffect, useState } from "react";
import "../DailyShopping/DailyShopping.css";
import boy from "../images/deliveryboy.png";
import pump from '../images/pumpkin.png'
import Pumpkins from "../Pumpkins/Pumpkins";
import GreenLeaf from "../GreenLeaf/GreenLeaf";
import list from '../Data/Data'
import list2 from "../Data/Data2";

const DailyShopping = ({handleClick, handleIcon}) => {



  // useEffect(() => {
  //   console.log(cart)
  // }, [cart])
  

  return (
    <>
      <div className="ds">
        <div className="container">
          <span className="h1ds pt-5 d-flex justify-content-center">
            Popular Products for Daily Shopping
          </span>
          <span className="span1inds pt-3 d-flex justify-content-center">
            See all our popular products in this week. You can choose your daily{" "}
            <br />
            needs products from this list and get some special offer with free{" "}
            <br />
            shipping.
          </span>
    
          <div className="row row row-cols-2 row-cols-lg-5 g-2 g-lg-3 pt-5">
            
          {list.map((item) =>
            <GreenLeaf key={item.id} item={item} handleClick={handleClick} handleIcon={handleIcon}/>)
          }
         
          </div>


                          {/* Download App BANNER */}



          <div className="DownloadApp">
            <div className="innerDownloadApp">
              <div className="row">
                <div className="col-md-auto">
                  <span className="span1">Organic Products and Food</span>
                  <br />
                  <span className="span2" style={{ color: "black" }}>
                    Quick Delivery{" "}
                    <span style={{ color: "Green" }}>to Your Home</span>
                  </span>
                  <br />
                  <br />
                  <span className="">
                    There are many products you will find our shop, Choose your
                    daily necessary product from our <br /> KachaBazar shop and
                    get some special offer. See Our latest discounted products{" "}
                    <br /> from here and get a special discount.
                  </span>
                  <br />
                  <button className="buttonn mt-4">Downloaad App</button>
                </div>

                <div className="col-md-auto">
                  <img className="" src={boy}></img>
                </div>
              </div>
            </div>
          </div>

                        {/* Latest Discounted Products */}


        <div className="pt-5">
        <p className="discount d-flex justify-content-center">Latest Discounted Products</p>
        <p className="discount2 d-flex justify-content-center">See Our latest discounted products below. Choose your daily needs <br/> from here and get a special discount with free shipping.</p>
        </div>
                            {/* pumpkin */}


        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 pt-5">

           {list2.map((items) =>
           <Pumpkins key={items.id} items={items}/>
           )}

          </div> 
        </div>
      </div>
    </>
  );
};

export default DailyShopping;
