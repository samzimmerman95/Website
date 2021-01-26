import React from "react";
import Images from "../../assets/images/adventures/2020CrossCountry/Images";
import * as Builder from "../storyBuilder";
export default function CrossCountry() {
  return <div>{Builder.title(Images[0], "Cross Country", "July 2020")}</div>;
}
