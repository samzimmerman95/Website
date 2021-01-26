import React from "react";
import Images from "../../assets/images/adventures/2020TorreyPines/Images";
import * as Builder from "../storyBuilder";
export default function TorreyPines() {
  return (
    <div>
      {Builder.title(Images[0], "Torrey Pines State Reserve", "November 2020")}
    </div>
  );
}
