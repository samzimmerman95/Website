import React from "react";
import Images from "../../assets/images/adventures/2019Pisa/Images";
import * as Builder from "../storyBuilder";
export default function Pisa() {
  return <div>{Builder.title(Images[0], "Pisa", "April 2019")}</div>;
}
