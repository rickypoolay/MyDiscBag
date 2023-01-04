declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type BagStackParamsList = {
  "Individual Bag": { bagData: any } | undefined;
};
