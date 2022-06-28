import React from "react";
import vegetable1 from "../images/veg1.jpg";
import "../CardComp1/CardComp1.css";
const CardComp1 = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="card11 col-lg-6">
            <span className="card12 mt-5 mx-5 d-flex">
              The Best Quality Product Guaranteed!
            </span>
            <span className="card13 mx-5 d-flex">
              Quickly aggregate empowered networks after emerging products...
            </span>
            <button className="button1 mt-5 mx-5">Shop Now</button>
          </div>
          <div className="col-lg-6 card21">
            {/* <div className="card22"> */}
            <p className="card22">Latest Super Discount Active Coupon Code</p>
            {/* </div> */}
            <div className="rectangle1 mt-3">
              <div className="row d-flex justify-content-start">
                <div className="col col-md-auto">
                  <img className="veg1 mt-2 ms-2" src={vegetable1} />
                </div>

                <div className="col col-md-auto justify-content-start">
                  <div className="d-inline">
                    <span className="h1ofsubcard1 ">
                      10 % <span style={{ color: "black" }}>off</span>
                    </span>
                    <button className="button22 px-2">
                      <span className="textinbutton2">Active</span>
                    </button>
                  </div>
                  <div className="mt-1">
                    <span className="summer11">Summer Gift Voucher</span>
                  </div>

                  <div className="d-flex">
                    <span className="square1 time ">6</span>
                    <span className="comma11">:</span>
                    <span className="square1 time mx-2">6</span>
                    <span className="comma11">:</span>
                    <span className="square1 time mx-2">50</span>
                    <span className="comma11">:</span>
                    <span className="square1 time mx-2">10</span>
                  </div>
                </div>

                <div className="col mt-4">
                  <button className="button23 d-block">
                    <span className="buttontextt">SUMMER22</span>
                  </button>
                  <span className="buttontextt2">
                    * This coupon apply <br />
                    when shopping more <br /> then $500
                  </span>
                </div>
              </div>
            </div>

            <div className="rectangle1 mt-3">
              <div className="row d-flex justify-content-start">
                <div className="col col-md-auto">
                  <img className="veg1 mt-2 ms-2" src={vegetable1} />
                </div>

                <div className="col col-md-auto justify-content-start">
                  <div className="d-inline">
                    <span className="h1ofsubcard1 ">
                      10 % <span style={{ color: "black" }}>off</span>
                    </span>
                    <button className="button22 px-2">
                      <span className="textinbutton2">Active</span>
                    </button>
                  </div>
                  <div className="mt-1">
                    <span className="summer11">Summer Gift Voucher</span>
                  </div>

                  <div className="d-flex">
                    <span className="square1 time ">6</span>
                    <span className="comma11">:</span>
                    <span className="square1 time mx-2">6</span>
                    <span className="comma11">:</span>
                    <span className="square1 time mx-2">50</span>
                    <span className="comma11">:</span>
                    <span className="square1 time mx-2">10</span>
                  </div>
                </div>

                <div className="col mt-4">
                  <button className="button23 d-block">
                    <span className="buttontextt">SUMMER22</span>
                  </button>
                  <span className="buttontextt2">
                    * This coupon apply <br />
                    when shopping more <br /> then $500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="qp py-5 px-5 mt-5">
            <div className="row">
              <div className="col col-md-6">
                <p className="spaninqp">
                  100% Natural Quality{" "}
                  <span style={{ color: "black" }}>Organic Product</span>
                </p>
                <p className="span 2 d-inline-flex">
                  See Our latest discounted products from here and get a special
                  discount product
                </p>
              </div>
              <div className="col col-md-6">
                <button className="justify-content-center d-flex button3 p-2 d-inline-flex">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComp1;
