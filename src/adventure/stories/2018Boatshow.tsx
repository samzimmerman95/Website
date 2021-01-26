import React from "react";
import Images from "../../assets/images/adventures/2018Boatshow/Images";
import * as Builder from "../storyBuilder";
export default function Boatshow() {
  return (
    <div>
      {Builder.title(Images[0], "Lake Winnipesaukee Boat Show", "July 2018")}
    </div>
  );
}
