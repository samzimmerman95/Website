import React from "react";
import Images from "../../assets/images/adventures/2020MtWashington/Images";
import * as Builder from "../storyBuilder";
export default function MtWashington() {
  return <div>{Builder.title(Images[0], "Mt. Washington", "June 2020")}</div>;
}
