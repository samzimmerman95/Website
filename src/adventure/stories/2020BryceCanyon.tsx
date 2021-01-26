import React from "react";
import Images from "../../assets/images/adventures/2020BryceCanyon/Images";
import * as Builder from "../storyBuilder";
export default function BryceCanyon() {
  return (
    <div>
      {Builder.title(Images[0], "Bryce Canyon National Park", "July 2020")}
    </div>
  );
}
