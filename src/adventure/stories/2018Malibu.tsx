import React from "react";
import Images from "../../assets/images/adventures/2018Malibu/Images";
import * as Builder from "../storyBuilder";
export default function Malibu() {
  return <div>{Builder.title(Images[0], "Malibu", "July 2018")}</div>;
}
