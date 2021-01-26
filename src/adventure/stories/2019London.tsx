import React from "react";
import Images from "../../assets/images/adventures/2019London/Images";
import * as Builder from "../storyBuilder";
export default function London() {
  return <div>{Builder.title(Images[0], "London", "March 2019")}</div>;
}
