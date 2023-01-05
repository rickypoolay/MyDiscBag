import Svg from "react-native-svg";
import { ROUTES } from "./constants";
import AllDiscsIcon from "../../assets/AllDiscsIcon";
import { Image } from "react-native";

const AllBagsIcon = require("../../assets/AllBagsIcon.png");
const ProfilesIcon = require("../../assets/ProfilesIcon.png");

export const TabIconSelector = (routeName: string) => {
  if (routeName == ROUTES.RootStack.AllDiscs) {
    return <AllDiscsIcon />;
  }
  if (routeName == ROUTES.RootStack.AllBags) {
    return (
      <Image style={{ height: 24, width: 24 }} key="2" source={AllBagsIcon} />
    );
  }
  if (routeName == ROUTES.RootStack.Profiles) {
    return (
      <Image style={{ height: 24, width: 24 }} key="3" source={ProfilesIcon} />
    );
  }
};
