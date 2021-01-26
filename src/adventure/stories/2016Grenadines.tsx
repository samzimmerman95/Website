import React from "react";
import Images from "../../assets/images/adventures/2016Grenadines/Images";
import * as Builder from "../storyBuilder";
export default function Grenadines() {
  return (
    <div>
      {Builder.title(Images[7], "St. Vincent & The Grenadines", "March 2016")}
    </div>
  );
}
