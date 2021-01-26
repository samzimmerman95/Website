import React from "react";
import Images from "../../assets/images/adventures/2019Sligachan/Images";
import * as Builder from "../storyBuilder";
export default function Sligachan() {
  return (
    <div>
      {Builder.title(Images[0], "Isle of Skye - Sligachan", "May 2019")}
    </div>
  );
}
