import { StyleSheet, TextStyle } from "react-native";
import { colors } from "./Colors";

export const typographyStyles = StyleSheet.create({
  Header1: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.mainTextColor,
  },
  Header2: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.mainTextColor,
  },
  Header3: {
    fontSize: 16,
    color: colors.mainTextColor,
  },
  NavigationTab: {
    fontSize: 12,
    color: colors.mainTextColor,
  },
});
