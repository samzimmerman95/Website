import React from "react";
import Images from "../../assets/images/adventures/2021Hawaii/Images";
import * as Builder from "../storyBuilder";
export default function Hawaii() {
  return <div>{Builder.title(Images[0], "Kauai", "August 2021")}</div>;
}
