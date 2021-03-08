import React from "react";
import Images from "../../assets/images/adventures/2018Boatshow/Images";
import * as Builder from "../storyBuilder";
export default function Boatshow() {
  return (
    <div>
      {Builder.title(Images[4], "Lake Winnipesaukee Boat Show", "July 2018")}
      {Builder.twoCols(Images[0], Images[1])}
      {Builder.twoCols(Images[2], Images[3])}
      {Builder.imageLTextR(
        Images[5],
        `The Lake Winnipesaukee Antique Boat Show is held each summer to showcase the classic 
      wooden boats from the NH lakes region. An impressive collection of Chris Crafts and Garwoods
      is typically on display. Some are new builds, some are immaculately restored originals, but they
      are all amazing to look at.`
      )}
      {Builder.twoCols(Images[6], Images[9])}
      {Builder.fullImage(Images[7])}
      {Builder.centeredText(`My dad has been interested in these boats for a long time. After years of 
      research and hunting, he finally found one that fit his desired specifications. It is a 1941 
      17' Chris Craft. It was sitting in a barn in Ohio, in hundreds of pieces and starting to rot away.
      He brought it home and spent the next 5 years restoring it to as close to the original as possible.
      After thousands of hours of work, it was finally ready to go back in the water. It has been a really
      awesome project to help with and watch come together over the years. Needless to say, cruising around
      the lake in this thing extremely cool.`)}
      {Builder.smallLeftBigRight(Images[10], Images[8])}
    </div>
  );
}
