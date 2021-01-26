import React from "react";
import Images from "../../assets/images/adventures/2018Cabot/Images";
import * as Builder from "../storyBuilder";
export default function Cabot() {
  return <div>{Builder.title(Images[0], "Cabot Cliffs", "July 2018")}</div>;
}
