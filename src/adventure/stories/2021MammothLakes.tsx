import React from "react";
import Images from "../../assets/images/adventures/2021MammothLakes/Images";
import * as Builder from "../storyBuilder";
export default function MammothLakes2021() {
  return <div>{Builder.title(Images[0], "Mammoth Lakes", "May 2021")}</div>;
}
