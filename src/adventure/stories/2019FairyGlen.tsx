import React from "react";
import Images from "../../assets/images/adventures/2019FairyGlen/Images";
import * as Builder from "../storyBuilder";
export default function FairyGlen() {
  return (
    <div>
      {Builder.title(Images[0], "Isle of Skye - Fairy Glen", "May 2019")}
    </div>
  );
}
