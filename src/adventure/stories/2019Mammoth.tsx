import React from "react";
import Images from "../../assets/images/adventures/2019Mammoth/Images";
import * as Builder from "../storyBuilder";
export default function Mammoth() {
  return <div>{Builder.title(Images[0], "Mammoth", "December 2019")}</div>;
}
