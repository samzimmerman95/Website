import React from "react";
import Images from "../../assets/images/adventures/2020Zion/Images";
import * as Builder from "../storyBuilder";
export default function Zion() {
  return (
    <div>{Builder.title(Images[0], "Zion National Park", "July 2020")}</div>
  );
}
