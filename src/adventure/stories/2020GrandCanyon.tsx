import React from "react";
import Images from "../../assets/images/adventures/2020GrandCanyon/Images";
import * as Builder from "../storyBuilder";
export default function GrandCanyon() {
  return <div>{Builder.title(Images[0], "Grand Canyon", "July 2020")}</div>;
}
