import React from "react";
import Images from "../../assets/images/adventures/2018Cabot/Images";
import * as Builder from "../storyBuilder";
export default function Cabot() {
  return (
    <div>
      {Builder.title(Images[7], "Cabot Cliffs", "July 2018")}
      {Builder.imageLTextR(
        Images[4],
        `Cabot Cliffs is home to two links style golf courses on Cape Breton Island in Nova Scotia. 
        To say it's a haul to get there is an understatement, but it was entirely worth it. 
        The tiny isolated town has wonderful charm and a dramatic landscape to match.`
      )}
      {Builder.twoCols(Images[0], Images[2])}
      {Builder.imageRTextL(
        Images[1],
        `The two courses sit right on the edge of the ocean, providing stunning views the entire round. 
        The land for the course was bought from the town for $1, on the promise they would build a world
        class golf resort that would attract people from around the world.`
      )}
      {Builder.centeredText(
        `My dad and I were treated to a few day of amazing golf and some equally stunning sunsets.
        There is something about links golf that makes it feel extra special. Maybe it's 
        the salty sea air combined with the sandy dunes and undulating terrain upon which 
        the fescue grows. Somehow it is unkempt yet perfectly pristine. It is as if the golf course 
        was simply drapped over the landscape, or maybe it was there all along. You feel connected 
        to the earth, to yourself, and to the game of golf.`
      )}
      {Builder.fullImage(Images[6])}
      {Builder.bigLeftSmallRight(Images[3], Images[5])}
    </div>
  );
}
