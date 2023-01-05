import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./Colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    height: windowHeight - 220,
    backgroundColor: colors.appBackgroundColor,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
