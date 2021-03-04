import React from "react";
import Images from "../../assets/images/adventures/2018Malibu/Images";
import * as Builder from "../storyBuilder";
export default function Malibu() {
  return (
    <div>
      {Builder.title(Images[0], "Malibu", "July 2018")}
      {Builder.twoCols(Images[1], Images[2])}
      {Builder.fullImage(Images[4])}
      {Builder.centeredText(
        "Don't think about how big the ocean is for too long."
      )}
      {Builder.twoCols(Images[5], Images[3])}
      {Builder.fullScreen(Images[6])}
    </div>
  );
}
