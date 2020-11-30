import { createImageList } from "../../../functions/createImageList";

var photos: string[] = [
  "DSC_9173.jpg",
  "DSC_9147.jpg",
  "DSC_9108.jpg",
  "DSC_9078.jpg",
  "DSC_8985.jpg",
  "DSC_8772.jpg",
  "DSC_8625.jpg",
  "DSC_8607.jpg",
  "DSC_8598.jpg",
  "DSC_8594.jpg",
  "DSC_8575.jpg",
  "DSC_8570.jpg",
  "DSC_8562.jpg",
  "DSC_8538.jpg",
  "DSC_8426.jpg",
  "DSC_8422.jpg",
  "DSC_8348.jpg",
  "DSC_8337.jpg",
  "DSC_8306.jpg",
  "DSC_8305.jpg",
  "DSC_8298.jpg",
  "DSC_8283-2.jpg",
  "DSC_8223.jpg",
  "DSC_8208.jpg",
  "DSC_8177.jpg",
  "DSC_8132.jpg",
  "DSC_8100.jpg",
  "DSC_8030.jpg",
  "DSC_7670.jpg",
  "DSC_7577.jpg",
  "DSC_7523.jpg",
  "DSC_7513.jpg",
  "DSC_7321.jpg",
  "DSC_7303.jpg",
  "DSC_7293.jpg",
  "DSC_7283.jpg",
  "DSC_7269.jpg",
  "DSC_7268.jpg",
  "DSC_7247.jpg",
  "DSC_7236.jpg",
  "DSC_7222-2.jpg",
  "DSC_7199.jpg",
  "DSC_7168.jpg",
  "DSC_7163.jpg",
  "DSC_6071.jpg",
  "DSC_5959.jpg",
  "DSC_5930.jpg",
  "DSC_5926-2.jpg",
  "DSC_5918.jpg",
  "DSC_5892.jpg",
  "DSC_5768.jpg",
  "DSC_5732.jpg",
  "DSC_5720.jpg",
  "DSC_5705.jpg",
  "DSC_5698.jpg",
  "DSC_5614.jpg",
  "DSC_5602.jpg",
  "DSC_5276.jpg",
  "DSC_5258.jpg",
  "DSC_5246.jpg",
  "DSC_5226.jpg",
  "DSC_5210.jpg",
  "DSC_5198.jpg",
  "DSC_4922.jpg",
  "DSC_4829.jpg",
  "DSC_3616.jpg",
  "DSC_3560.jpg",
  "DSC_3482.jpg",
  "DSC_3162.jpg",
  "DSC_3141.jpg",
  "DSC_3104.jpg",
  "DSC_3033.jpg",
  "DSC_2835.jpg",
  "DSC_2820-2.jpg",
  "DSC_2809-2.jpg",
  "DSC_2773.jpg",
  "DSC_2765.jpg",
];

// createImageList(photos);

const images: any = [
  { id: 0, src: require("./2017/DSC_9173.jpg"), col: 3, title: "" },
  { id: 1, src: require("./2017/DSC_9108.jpg"), col: 2, title: "" },
  { id: 2, src: require("./2017/DSC_9078.jpg"), col: 1, title: "" },
  { id: 3, src: require("./2017/DSC_8985.jpg"), col: 2, title: "" },
  { id: 4, src: require("./2017/DSC_8772.jpg"), col: 3, title: "" },
  { id: 5, src: require("./2017/DSC_8625.jpg"), col: 1, title: "" },
  { id: 6, src: require("./2017/DSC_8607.jpg"), col: 2, title: "" },
  { id: 7, src: require("./2017/DSC_8598.jpg"), col: 3, title: "" },
  { id: 8, src: require("./2017/DSC_8594.jpg"), col: 1, title: "" },
  { id: 9, src: require("./2017/DSC_8575.jpg"), col: 3, title: "" },
  { id: 10, src: require("./2017/DSC_8570.jpg"), col: 2, title: "" },
  { id: 11, src: require("./2017/DSC_8562.jpg"), col: 1, title: "" },
  { id: 12, src: require("./2017/DSC_8538.jpg"), col: 2, title: "" },
  { id: 13, src: require("./2017/DSC_8426.jpg"), col: 3, title: "" },
  { id: 14, src: require("./2017/DSC_8422.jpg"), col: 2, title: "" },
  { id: 15, src: require("./2017/DSC_8348.jpg"), col: 1, title: "" },
  { id: 16, src: require("./2017/DSC_8283-2.jpg"), col: 2, title: "" },
  { id: 17, src: require("./2017/DSC_8306.jpg"), col: 1, title: "" },
  { id: 18, src: require("./2017/DSC_8337.jpg"), col: 2, title: "" },
  { id: 19, src: require("./2017/DSC_8298.jpg"), col: 3, title: "" },
  { id: 20, src: require("./2017/DSC_8305.jpg"), col: 1, title: "" },
  { id: 21, src: require("./2017/DSC_8223.jpg"), col: 2, title: "" },
  { id: 22, src: require("./2017/DSC_8208.jpg"), col: 3, title: "" },
  { id: 23, src: require("./2017/DSC_8177.jpg"), col: 1, title: "" },
  { id: 24, src: require("./2017/DSC_8132.jpg"), col: 3, title: "" },
  { id: 25, src: require("./2017/DSC_8100.jpg"), col: 3, title: "" },
  { id: 26, src: require("./2017/DSC_8030.jpg"), col: 1, title: "" },
  { id: 27, src: require("./2017/DSC_7670.jpg"), col: 3, title: "" },
  { id: 28, src: require("./2017/DSC_7577.jpg"), col: 3, title: "" },
  { id: 29, src: require("./2017/DSC_7523.jpg"), col: 1, title: "" },
  { id: 30, src: require("./2017/DSC_7513.jpg"), col: 2, title: "" },
  { id: 31, src: require("./2017/DSC_7321.jpg"), col: 3, title: "" },
  { id: 32, src: require("./2017/DSC_7303.jpg"), col: 1, title: "" },
  { id: 33, src: require("./2017/DSC_7293.jpg"), col: 2, title: "" },
  { id: 34, src: require("./2017/DSC_7283.jpg"), col: 3, title: "" },
  { id: 35, src: require("./2017/DSC_5959.jpg"), col: 2, title: "" },
  { id: 36, src: require("./2017/DSC_7199.jpg"), col: 1, title: "" },
  { id: 37, src: require("./2017/DSC_7247.jpg"), col: 3, title: "" },
  { id: 38, src: require("./2017/DSC_7236.jpg"), col: 1, title: "" },
  { id: 39, src: require("./2017/DSC_7222-2.jpg"), col: 2, title: "" },
  { id: 40, src: require("./2017/DSC_7268.jpg"), col: 2, title: "" },
  { id: 41, src: require("./2017/DSC_7168.jpg"), col: 3, title: "" },
  { id: 42, src: require("./2017/DSC_7163.jpg"), col: 3, title: "" },
  { id: 43, src: require("./2017/DSC_6071.jpg"), col: 1, title: "" },
  { id: 44, src: require("./2017/DSC_7269.jpg"), col: 1, title: "" },
  { id: 45, src: require("./2017/DSC_5930.jpg"), col: 2, title: "" },
  { id: 46, src: require("./2017/DSC_5926-2.jpg"), col: 3, title: "" },
  { id: 47, src: require("./2017/DSC_5918.jpg"), col: 1, title: "" },
  { id: 48, src: require("./2017/DSC_5892.jpg"), col: 2, title: "" },
  { id: 49, src: require("./2017/DSC_5720.jpg"), col: 3, title: "" },
  { id: 50, src: require("./2017/DSC_5732.jpg"), col: 1, title: "" },
  { id: 51, src: require("./2017/DSC_5768.jpg"), col: 3, title: "" },
  { id: 52, src: require("./2017/DSC_5705.jpg"), col: 2, title: "" },
  { id: 53, src: require("./2017/DSC_5698.jpg"), col: 3, title: "" },
  { id: 54, src: require("./2017/DSC_5614.jpg"), col: 2, title: "" },
  { id: 55, src: require("./2017/DSC_5602.jpg"), col: 3, title: "" },
  { id: 56, src: require("./2017/DSC_5276.jpg"), col: 1, title: "" },
  { id: 57, src: require("./2017/DSC_5258.jpg"), col: 2, title: "" },
  { id: 58, src: require("./2017/DSC_5246.jpg"), col: 3, title: "" },
  { id: 59, src: require("./2017/DSC_5226.jpg"), col: 1, title: "" },
  { id: 60, src: require("./2017/DSC_5210.jpg"), col: 3, title: "" },
  { id: 61, src: require("./2017/DSC_5198.jpg"), col: 1, title: "" },
  { id: 62, src: require("./2017/DSC_4922.jpg"), col: 1, title: "" },
  { id: 63, src: require("./2017/DSC_4829.jpg"), col: 2, title: "" },
  { id: 64, src: require("./2017/DSC_3616.jpg"), col: 3, title: "" },
  { id: 65, src: require("./2017/DSC_3560.jpg"), col: 3, title: "" },
  { id: 66, src: require("./2017/DSC_3482.jpg"), col: 3, title: "" },
  { id: 67, src: require("./2017/DSC_3162.jpg"), col: 3, title: "" },
  { id: 68, src: require("./2017/DSC_3141.jpg"), col: 1, title: "" },
  { id: 69, src: require("./2017/DSC_3104.jpg"), col: 2, title: "" },
  { id: 70, src: require("./2017/DSC_3033.jpg"), col: 1, title: "" },
  { id: 71, src: require("./2017/DSC_2835.jpg"), col: 1, title: "" },
  { id: 72, src: require("./2017/DSC_2820-2.jpg"), col: 2, title: "" },
  { id: 73, src: require("./2017/DSC_2809-2.jpg"), col: 3, title: "" },
  { id: 74, src: require("./2017/DSC_2773.jpg"), col: 1, title: "" },
  { id: 75, src: require("./2017/DSC_2765.jpg"), col: 2, title: "" },
];

export default images;
