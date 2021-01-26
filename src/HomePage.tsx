import React from "react";
import Footer from "./Footer";
import "./Custom.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row">
        <div className="col px-2 mb-2">
          <div
            className="carousel slide carousel-fade"
            data-ride="carousel"
            data-pause="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("./assets/images/feed/2019/DSC_4848.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./assets/images/feed/2016/DSC_5799.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./assets/images/adventures/2020Zion/DSC_0079.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./assets/images/adventures/2019Quirang/DSC_6156.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 40%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./assets/images/adventures/2019Flodigarry/DSC_6430.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 60%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./assets/images/adventures/2019FairyGlen/DSC_6280.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 60%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./assets/images/adventures/2020CrossCountry/DSC_9831.jpg")}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 40%",
                    width: "100%",
                    height: "80vh",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md px-2 pr-md-1 pb-2">
          <div className="relativeContainer">
            <img
              src={require("./assets/images/feed/2018/DSC_3108.jpg")}
              className="img-fluid"
            />
            <Link to="/feed">
              <div className="centerTitle">
                <h5 className="text-white text-center border border-white p-3">
                  Photo Stream
                </h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md px-2 pl-md-1 pb-2">
          <div className="relativeContainer">
            <img
              src={require("./assets/images/feed/2019/DSC_5557.jpg")}
              className="img-fluid"
            />
            <Link to="/adventures">
              <div className="centerTitle">
                <h5 className="text-white text-center border border-white p-3">
                  Adventures & Travel
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
