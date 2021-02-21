import React from "react";
import Images from "../../assets/images/adventures/2017Yellowstone/Images";
import * as Builder from "../storyBuilder";
export default function Yellowstone() {
  return (
    <div>
      {Builder.title(Images[0], "Yellowstone National Park", "March 2017")}
      {Builder.twoCols(Images[6], Images[1])}
      {Builder.imageLTextR(
        Images[2],
        "Came across lots of Bison roaming the park, as well as some elk. They spend a lot of their time in the winter near the hot springs where the snow doesn't cover all the vegetation."
      )}
      {Builder.imageRTextL(
        Images[3],
        "Unfortunately due to the overcast skies it was hard to really appreciate the size of the Old Faithful Geyser. It was still really amazing."
      )}
      {Builder.twoCols(Images[4], Images[5])}
      {Builder.centeredText(
        "Doing a snowmobile tour of the park was a lot of fun, and a great way to experience all there is to see. These snow coaches are pretty sweet looking though, I wouldn't mind one of those."
      )}
      {Builder.twoCols(Images[7], Images[8])}
      {Builder.centeredText(
        "Driving back to Big Sky. Skiing is what we really came for."
      )}
    </div>
  );
}
