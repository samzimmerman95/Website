import React from "react";
import Images from "../../assets/images/adventures/2019Flodigarry/Images";
import * as Builder from "../storyBuilder";
export default function NAME() {
return <div>{Builder.title(Images[0], "TITLE", "DATE")}</div>;
}
