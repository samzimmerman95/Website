import React from "react";
import Images from "../../assets/images/adventures/2018Sugarloaf/Images";
import * as Builder from "../storyBuilder";
export default function Sugarloaf() {
  return (
    <div>
      {Builder.title(Images[3], "Sugarloaf", "March 2018")}
      {Builder.twoCols(Images[10], Images[8])}
      {Builder.centeredText(
        "The snowiest month living up to its name. Freshly fallen snow is one of my favorite sights. Fin had a lot of fun jumping and disappearing into the deep snow."
      )}
      {Builder.threeCols(Images[1], Images[6], Images[9])}
      {Builder.twoCols(Images[5], Images[7])}
      {Builder.twoCols(Images[4], Images[2])}
      {Builder.fullScreen(Images[0])}
    </div>
  );
}
