import Svg from "react-native-svg";
import { ROUTES } from "./constants";
import AllDiscsIcon from "../../assets/AllDiscsIcon";
import { Image } from "react-native";

export const TabIconSelector = (routeName: string) => {
  if (routeName == ROUTES.RootStack.AllDiscs) {
    return <AllDiscsIcon />;
  }
  if (routeName == ROUTES.RootStack.AllBags) {
    const src = require("../../assets/AllBagsIcon.png");
    return <Image style={{ height: 24, width: 24 }} source={src} />;
  }
  if (routeName == ROUTES.RootStack.Profiles) {
    const src = require("../../assets/ProfilesIcon.png");
    return <Image style={{ height: 24, width: 24 }} source={src} />;
  }
};
