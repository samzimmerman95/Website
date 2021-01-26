import React from "react";
import Images from "../../assets/images/adventures/2019Stockholm/Images";
import * as Builder from "../storyBuilder";
export default function Stockholm() {
  return <div>{Builder.title(Images[0], "Stockholm", "February 2019")}</div>;
}
