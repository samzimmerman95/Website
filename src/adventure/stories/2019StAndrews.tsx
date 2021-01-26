import React from "react";
import Images from "../../assets/images/adventures/2019StAndrews/Images";
import * as Builder from "../storyBuilder";
export default function StAndrews() {
  return <div>{Builder.title(Images[0], "St. Andrews", "March 2019")}</div>;
}
