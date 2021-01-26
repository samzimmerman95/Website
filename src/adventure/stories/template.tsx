import React from "react";
import Images from "../../assets/images/adventures/2016Sugarloaf/Images";
import * as Builder from "../storyBuilder";

export default function Sugarloaf() {
  return <div>{Builder.title(Images[0], "title", "date")}</div>;
}
