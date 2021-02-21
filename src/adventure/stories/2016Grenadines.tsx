import React from "react";
import Images from "../../assets/images/adventures/2016Grenadines/Images";
import * as Builder from "../storyBuilder";
export default function Grenadines() {
  return (
    <div>
      {Builder.title(Images[7], "St. Vincent & The Grenadines", "March 2016")}
      {Builder.centeredText(
        "We sailed a catamaran around these islands for 10 days, ducking into coves and exploring some secluded beaches."
      )}
      {Builder.twoCols(Images[1], Images[2])}
      {Builder.threeCols(Images[0], Images[5], Images[4])}
      {Builder.imageLTextR(
        Images[9],
        "Sleeping on a boat has to be one of the most relaxing experiences in life. The gentle rocking and the sound of the water against the hull is really something. Waking up is not too bad either."
      )}
      {Builder.twoCols(Images[8], Images[6])}
      {Builder.centeredText(
        "Morning hike to the highest point on Union Island, quite the view. The large boat is Larry Ellison's, not mine unfortunately."
      )}
      {Builder.twoCols(Images[10], Images[11])}
      {Builder.smallLeftBigRight(Images[13], Images[14])}
      {Builder.centeredText("Paradise.")}
      {Builder.bigLeftSmallRight(Images[12], Images[15])}
      {Builder.fullImage(Images[17])}
      {Builder.centeredText(
        "I enjoy watching the subtle textures that form on the water. It's very mesmerizing."
      )}
      {Builder.twoCols(Images[16], Images[18])}
      {Builder.imageLTextR(
        Images[19],
        "Sailing back to St. Vincent, the last leg of our 90 mile sailing escapade. We made the most of the pools before we left for our flight."
      )}
      {Builder.twoCols(Images[21], Images[20])}
    </div>
  );
}
