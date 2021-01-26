import React from "react";
import Images from "../../assets/images/adventures/2017Yellowstone/Images";
import * as Builder from "../storyBuilder";
export default function Yellowstone() {
  return (
    <div>
      {Builder.title(Images[0], "Yellowstone National Park", "March 2017")}
    </div>
  );
}
