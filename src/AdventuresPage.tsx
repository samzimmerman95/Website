import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
export default class AdventuresPage extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="container">
          <NavBar />
          <Parallax y={[0, 0]}>
            <div className="relativeContainer pb-2">
              <img
                src={require("./assets/images/home/DSC_4848-2.jpg")}
                className="img-fluid"
                style={{ height: "70vh", width: "100%", objectFit: "cover" }}
              />
              <div className="adventureTitleTextBox d-flex justify-content-center">
                <h4 className="text-white">Scotland 2019 1</h4>
              </div>
            </div>
          </Parallax>
          <Parallax y={[10, -80]}>
            <div className="relativeContainer pb-2">
              <img
                src={require("./assets/images/home/DSC_4848-2.jpg")}
                className="img-fluid"
                style={{
                  height: "90vh",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 60%",
                }}
              />
              <div className="adventureTitleTextBox d-flex justify-content-center">
                <h3 className="text-white">Scotland 2019</h3>
              </div>
            </div>
          </Parallax>
          <Footer />
        </div>
      </ParallaxProvider>
    );
  }
}
