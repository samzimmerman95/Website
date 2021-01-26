import React from "react";
import Images from "../../assets/images/adventures/2019CinqueTerre/Images";
import * as Builder from "../storyBuilder";
export default function CinqueTerre() {
  return <div>{Builder.title(Images[0], "Cinque Terre", "April 2019")}</div>;
}
