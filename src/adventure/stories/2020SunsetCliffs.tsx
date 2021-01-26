import React from "react";
import Images from "../../assets/images/adventures/2020SunsetCliffs/Images";
import * as Builder from "../storyBuilder";
export default function SunsetCliffs() {
  return <div>{Builder.title(Images[0], "Sunset Cliffs", "August 2020")}</div>;
}
