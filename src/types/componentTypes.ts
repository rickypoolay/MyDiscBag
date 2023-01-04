type BagCardDataType = {
  id: string;
  bagName: string;
  bagItems: [bagItemType];
};

type bagItemType = {
  discName: string;
  id: number;
  image: string;
};
