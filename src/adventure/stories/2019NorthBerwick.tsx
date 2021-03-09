import React from "react";
import Images from "../../assets/images/adventures/2019NorthBerwick/Images";
import * as Builder from "../storyBuilder";
export default function NorthBerwick() {
  return (
    <div>
      {Builder.title(Images[14], "North Berwick", "January 2019")}
      {Builder.twoCols(Images[0], Images[2])}
      {Builder.imageRTextL(
        Images[3],
        `North Berwick is a small seaside town about 25 miles 
      west of Edinburgh, Scotland. We took the train over for an afternoon of exploration.`
      )}
      {Builder.twoCols(Images[1], Images[5])}
      {Builder.fullImage(Images[8])}
      {Builder.centeredText(`The North Berwick Law is seen looming in the distance. It rises
      high over the flat surrounding landscape. The steep and exposed hill is a volcanic plug, 
      an extremely hard rock formed by magma in the center of a volcano. Since the rock is so
      hard, it survived the scraping of glaciers during the ice age while other softer sections
      were carried away, only leaving this central, conical core. This is the same geological
      process that created Arthur's Seat in Edinburgh, and the rock on which Edinburgh Castle sits.`)}
      {Builder.twoCols(Images[6], Images[7])}
      {Builder.centeredText(`Climbing around the rocks by the port. I like the craggy texture of
      the rocks in combination with the warm sunshine.`)}
      {Builder.smallLeftBigRight(Images[11], Images[10])}
      {Builder.centeredText(`The hike to the top of the law is relatively short, but quite
      steep.`)}
      {Builder.bigLeftSmallRight(Images[9], Images[13])}
      {Builder.twoCols(Images[12], Images[17])}
      {Builder.centeredText(
        `Due to the clear skies, we could see all the way across the Firth of Forth.
         As with most things in Scotland, Bass Rock (right) has a long and interesting 
         history. First a castle, then a chapel which was later converted to a prison.
         Now it's home to a humble lighthouse, but this remote, uninhabitable looking 
         rock has really seen it all.`
      )}
      {Builder.twoCols(Images[18], Images[20])}
      {Builder.imageLTextR(
        Images[15],
        `From the top there is an unrestricted 360 degree view of the surrounding area.
        The town and the Firth of Forth to the north, and rolling farmland to the west
        and the south. Even Authur's Seat and Edinburgh can be seen in the distance.
        We thoroughly enjoyed the beautiful sunset from this amazing vantage point. Mind you,
        the sunset was at 3:45 due to the short January days this far north.`
      )}
      {Builder.fullImage(Images[16])}
      {Builder.twoCols(Images[24], Images[19])}
      {Builder.centeredText(
        `At the summit there is evidence of a hill fort, which is believed to be from the
        Iron Age. There are also the ruins of two military buildings used as lookouts in 
        Napoleonic Wars and World War II. Katie is seen reading about the whale's jawbone
        which was originally placed here in 1709. A replica now stands in its place.`
      )}
      {Builder.bigLeftSmallRight(Images[21], Images[23])}
      {Builder.smallLeftBigRight(Images[28], Images[25])}
      {Builder.centeredText(`The light this afternoon was simply amazing. Light winds made it reasonable
      to stay at the top for a while and enjoy the view (the same cannot be said for the other
      time I was up here, it was insanely windy). I liked this marker, it's message felt very 
      appropriate .`)}
      {Builder.fullImage(Images[26])}
      {Builder.fullImage(Images[27])}
      {Builder.centeredText(`These are some of my favorite pictures I've ever taken. The 
      combination of the setting and the light, along with the feeling of adventure brought on 
      by exploring a new country with your friends, thousands of miles from home.
      For me, that's what it's all about. I love that sense of adventure.`)}
    </div>
  );
}
