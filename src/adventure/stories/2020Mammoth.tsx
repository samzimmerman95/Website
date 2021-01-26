import React from "react";
import Images from "../../assets/images/adventures/2020Mammoth/Images";
import * as Builder from "../storyBuilder";
export default function Mammoth() {
  return <div>{Builder.title(Images[0], "Mammoth", "November 2020")}</div>;
}
