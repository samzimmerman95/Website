import React from "react";
import Images from "../../assets/images/adventures/2020MammothLakes/Images";
import * as Builder from "../storyBuilder";
export default function MammothLakes() {
  return (
    <div>{Builder.title(Images[0], "Mammoth Lakes", "September 2020")}</div>
  );
}
