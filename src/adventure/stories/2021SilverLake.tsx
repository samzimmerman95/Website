import React from "react";
import Images from "../../assets/images/adventures/2021SilverLake/Images";
import * as Builder from "../storyBuilder";
export default function SilverLake() {
  return <div>{Builder.title(Images[0], "Silver Lake", "June 2021")}</div>;
}
