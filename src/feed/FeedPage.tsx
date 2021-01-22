import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { threeCols } from "./createRows";
import Images2016 from "../assets/images/feed/Images2016";
import Images2017 from "../assets/images/feed/Images2017";
import Images2018 from "../assets/images/feed/Images2018";
import Images2019 from "../assets/images/feed/Images2019";
import Images2020 from "../assets/images/feed/Images2020";

export default function FeedPage() {
  return (
    <div className="container-fluid">
      <NavBar />
      <h3 className="text-center text-muted">2020</h3>
      {threeCols(Images2020, 0, 109, 2020)}
      {console.log("Length: ", Images2020.length)}

      <h3 className="text-center text-muted">2019</h3>
      {threeCols(Images2019, 0, 150, 2019)}

      <h3 className="text-center text-muted">2018</h3>
      {threeCols(Images2018, 0, 41, 2018)}

      <h3 className="text-center text-muted">2017</h3>
      {threeCols(Images2017, 0, 75, 2017)}

      <h3 className="text-center text-muted">2016</h3>
      {threeCols(Images2016, 0, 41, 2016)}

      <Footer />
    </div>
  );
}
