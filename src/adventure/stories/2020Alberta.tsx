import React from "react";
import Images from "../../assets/images/adventures/2020Alberta/Images";
import * as Builder from "../storyBuilder";
export default function Alberta() {
  return <div>{Builder.title(Images[0], "Alberta", "March 2020")}</div>;
}
