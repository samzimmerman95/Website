import React from "react";
import Images from "../../assets/images/adventures/2020Kancamagus/Images";
import * as Builder from "../storyBuilder";
export default function Kancamagus() {
  return <div>{Builder.title(Images[0], "Kancamagus", "June 2020")}</div>;
}
