import React from "react";
import "../Footer/Footer.css";
import logo2 from "../images/logo-2.png";
import slogo from "../images/socialmedia.png";
import cc from "../images/creditcard.png";
const Footer = () => {
  return (
    <div className="container-fluid ">
      <div className="justify-content-center d-flex pt-4 ">
        <p className="px-5 footerfont">
          <i className="fa fa-truck iconss mx-3"></i>Free Shipping From $500.00
        </p>
        <p className="px-5 footerfont ">
          <i className="fa fa-phone iconss mx-3"></i>Support 24/7 At Anytime
        </p>
        <p className="px-5 footerfont">
          <i class="fa-solid fa-cash-register iconss mx-3"></i>Secure Payment
          Tottaly safe
        </p>
        <p className="px-5 footerfont">
          <i class="fa-solid fa-gift iconss mx-3"></i>Latest Offer Upto 20% off
        </p>
        <hr />
      </div>

      <div className="row pt-4 roww ">
        <div className="col col-bg-4 text-center">
          <p className="hif">Company</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Latest News</p>
        </div>

        <div className="col col-bg-4 text-center ">
          <p className="hif">Top Category</p>
          <p>Fish & Meat</p>
          <p>Baby Care</p>
          <p>Soft Drinks</p>
          <p>Beauty & Health </p>
        </div>

        <div className="col col-bg-4 text-center">
          <p className="hif">My Account</p>
          <p>Dashboards</p>
          <p>My Orders</p>
          <p>Recent Orders</p>
          <p>Updated Profile</p>
        </div>

        <div className="col col-bg-4">
          <img src={logo2}></img>
          <p className="address mt-3">
            987 Andre Plain Suite High Street 838,
            <br />
            Lake Hestertown, USA
            <br />
            Tell: 02.356.1666
            <br />
            Email: ccruidk@test.com
          </p>
        </div>
      </div>

      <div className="container pt-5">
        <div className="Footer2 p-5">
          <div className="row  ">
            <div className="col col-md-4 d-flex justify-content-center">
              <img src={slogo}></img>
            </div>
            <div className="col col-md-4 text-center">
              <p className="footer2text1 mt-3">Call Us Today!</p>
              <p className="footer2text2">+012345-67900</p>
            </div>
            <div className="col col-md-4 d-flex justify-content-center">
              <img src={cc}></img>
            </div>
          </div>
        </div>
        <p className="copyright pt-3 pb-3">Copyright 2022 @ HtmlLover , All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
