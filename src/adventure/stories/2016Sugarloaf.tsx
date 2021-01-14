import React from "react";
import Images from "../../assets/images/adventures/2016Sugarloaf/Images";
import * as Builder from "../storyBuilder";

export default function Sugarloaf() {
  return (
    <div>
      {Builder.title(Images[2], "Sugarloaf Homecoming", "October 2016")}
      {Builder.twoCols(Images[1], Images[4])}
      {Builder.smallLeftBigRight(Images[0], Images[3])}
    </div>
  );
}
