import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Custom.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col px-0 mb-2">
            <div
              className="carousel slide carousel-fade"
              data-ride="carousel"
              data-pause="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("./assets/images/home/DSC_4848-2.jpg")}
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
                    src={require("./assets/images/feed/2018/DSC_2655.jpg")}
                    className="img-fluid"
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 80%",
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
          <div className="col-md px-0 pr-md-1 pb-2">
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
          <div className="col-md px-0 pl-md-1 pb-2">
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
      </div>
      <Footer />
    </div>
  );
}
