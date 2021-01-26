import React from "react";
import Images from "../../assets/images/adventures/2019OldMan/Images";
import * as Builder from "../storyBuilder";
export default function OldMan() {
  return (
    <div>
      {Builder.title(Images[0], "Isle of Skye - Old Man of Storr", "May 2019")}
    </div>
  );
}
