import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const globalStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
    paddingTop: 36,
    paddingHorizontal: 20,
  },
});
