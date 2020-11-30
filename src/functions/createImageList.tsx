export type myImage = {
  id: number;
  src: string;
  col: number;
  title: string;
};

export function createImageList(imagePath: string[]) {
  let itemID: number = 0;
  let imageList: myImage[] = [];

  imagePath.forEach(function (photo: string) {
    var item: myImage = {
      id: itemID,
      src: photo,
      col: (itemID % 3) + 1,
      title: "",
    };

    imageList.push(item);
    itemID++;
  });

  console.log(JSON.stringify(imageList));
}
