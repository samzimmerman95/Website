import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Custom.css";
import {
  threeCols,
  twoColsPanoLeft,
  twoColsPanoRight,
} from "./functions/createRows";
import Images2016 from "./assets/images/feed/Images2016";
import Images2017 from "./assets/images/feed/Images2017";

export default function FeedPage() {
  return (
    <div>
      <div className="container">
        <NavBar />
        <h3 className="text-center text-muted">2020</h3>
        <h3 className="text-center text-muted">2019</h3>
        <h3 className="text-center text-muted">2018</h3>
        <h3 className="text-center text-muted">2017</h3>
        {threeCols(Images2017, 0, 75, 2017)}
        <h3 className="text-center text-muted">2016</h3>

        {threeCols(Images2016, 0, 23, 2016)}
        {twoColsPanoRight(Images2016[24], Images2016[25], 2016)}
        {threeCols(Images2016, 26, 43, 2016)}
      </div>

      <Footer />
    </div>
  );
}
