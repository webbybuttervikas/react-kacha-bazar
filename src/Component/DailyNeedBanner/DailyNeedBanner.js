import React from "react";
import "../DailyNeedBanner/DailyNeedBanner.css";
import banner from "../images/appdownloadimg.png";
import banner2 from "../images/appdownloadimg2.png";
import apple from "../images/Apple.png";
import play from "../images/play.png";
const DailyNeedBanner = () => {
  return (
    <div className="banner">
      <div className="container-fluid">
        <div class="row align-items-start">
          <div class="col">
            <img className="banner1" src={banner}></img>
          </div>
          <div class="col">
            <div className="textmid1 mt-5">
              Get Your Daily Needs From Our KachaBazar Store
            </div>
            <div className="textmid2">
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer.
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button className="buttonapp mx-3">
              <div className="d-flex px-2">
                <img className="pe-2" src={apple}></img>
                <span className="buttonfont px-1">Available on the <br/> App Store</span>
              </div>
               
              </button>
              <button className="buttonapp mx-3">
              <div className="d-flex px-2">
              <img className="pe-2" src={play}></img>
                <span className="buttonfont">Available on the <br/> Play Store</span>
              </div>
              </button>
            </div>
          </div>
          <div class="col">
            <img className="banner1" src={banner2}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyNeedBanner;
