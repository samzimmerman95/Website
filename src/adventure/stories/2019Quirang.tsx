import React from "react";
import Images from "../../assets/images/adventures/2019Quirang/Images";
import * as Builder from "../storyBuilder";
export default function Quirang() {
  return (
    <div>{Builder.title(Images[0], "Isle of Skye - Quirang", "May 2019")}</div>
  );
}
