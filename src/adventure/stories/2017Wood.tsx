import React from "react";
import Images from "../../assets/images/adventures/2017Wood/Images";
import * as Builder from "../storyBuilder";
export default function WoodIsland() {
  return (
    <div>
      {Builder.title(Images[2], "Wood Island", "May 2017")}
      {Builder.twoCols(Images[0], Images[3])}
      {Builder.imageLTextR(
        Images[1],
        "The Wood Island Life Saving Station was built in 1908 at the mouth of the Piscataque River in Kittery Point, Maine. After decades of neglect, it is finally undergoing restoration. This summer Pierce was tasked with driving the construction crew out to the island in the mornings. We often went out to explore this historic site for ourselves."
      )}
      {Builder.fullScreen(Images[4])}
      {Builder.fullScreen(Images[5])}
    </div>
  );
}
