import React from "react";
import Images from "../../assets/images/adventures/2019Mammoth/Images";
import * as Builder from "../storyBuilder";
export default function Mammoth() {
  return (
    <div>
      {Builder.title(Images[6], "Mammoth", "December 2019")}
      {Builder.twoCols(Images[0], Images[3])}
      {Builder.bigLeftSmallRight(Images[5], Images[4])}
      {Builder.smallLeftBigRight(Images[1], Images[2])}
      {Builder.fullImage(Images[7])}
      {Builder.imageLTextR(
        Images[8],
        `Evening light on snowy mountains is one of my favorite sights.`
      )}
    </div>
  );
}
