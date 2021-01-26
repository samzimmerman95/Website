import React from "react";
import Images from "../../assets/images/adventures/2019NorthBerwick/Images";
import * as Builder from "../storyBuilder";
export default function NorthBerwick() {
  return <div>{Builder.title(Images[0], "North Berwick", "January 2019")}</div>;
}
