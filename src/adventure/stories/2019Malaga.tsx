import React from "react";
import Images from "../../assets/images/adventures/2019Malaga/Images";
import * as Builder from "../storyBuilder";
export default function Malaga() {
  return <div>{Builder.title(Images[0], "Malaga", "April 2019")}</div>;
}
