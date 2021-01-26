import React from "react";
import Images from "../../assets/images/adventures/2017Wood/Images";
import * as Builder from "../storyBuilder";
export default function WoodIsland() {
  return <div>{Builder.title(Images[0], "Wood Island", "May 2017")}</div>;
}
