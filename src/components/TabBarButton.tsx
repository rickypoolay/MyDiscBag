import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { typographyStyles } from "../styles/Typography";
import { colors } from "../styles/Colors";

export default function TabBarButton({
  setSelected,
  routeName,
  selected,
}: {
  routeName: string;
  setSelected?: any;
  selected?: string;
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        position: "relative",
        width: 100,
        borderColor: "white",
        borderWidth: 1,
      }}
      activeOpacity={selected == routeName ? 1 : 0.2}
      onPress={() => setSelected(routeName)}
    >
      {selected == routeName ? (
        <Text style={typographyStyles.NavigationTab}>selected</Text>
      ) : (
        <Text style={typographyStyles.NavigationTab}>{routeName}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    position: "relative",
  },
  activeWrapper: {
    position: "absolute",
    alignItems: "center",
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    top: -6,
  },
  inActiveWrapper: {
    alignItems: "center",
  },
  icon: { borderColor: "white", borderWidth: 1 },
});
