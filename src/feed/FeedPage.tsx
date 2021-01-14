import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { threeCols, twoColsPanoLeft, twoColsPanoRight } from "./createRows";
import Images2016 from "../assets/images/feed/Images2016";
import Images2017 from "../assets/images/feed/Images2017";
import Images2018 from "../assets/images/feed/Images2018";
import Images2019 from "../assets/images/feed/Images2019";

export default function FeedPage() {
  return (
    <div className="container-fluid">
      <NavBar />
      <h3 className="text-center text-muted">2020</h3>
      <h3 className="text-center text-muted">2019</h3>
      {/* {threeCols(Images2019, 0, 189, 2019)} */}
      <h3 className="text-center text-muted">2018</h3>
      {threeCols(Images2018, 0, 41, 2018)}
      <h3 className="text-center text-muted">2017</h3>
      {threeCols(Images2017, 0, 75, 2017)}
      <h3 className="text-center text-muted">2016</h3>

      {threeCols(Images2016, 0, 41, 2016)}
      {/* {twoColsPanoRight(Images2016[24], Images2016[25], 2016)} */}
      {/* {threeCols(Images2016, 26, 43, 2016)} */}
      <Footer />
    </div>
  );
}
