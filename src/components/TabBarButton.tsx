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
import { TabIconSelector } from "../utils/helpers";

export default function TabBarButton({
  navigation,
  setSelected,
  routeName,
  selected,
}: {
  navigation: any;
  routeName: string;
  setSelected?: any;
  selected?: string;
}) {
  return (
    <TouchableOpacity
      style={styles.contentWrapper}
      activeOpacity={1}
      onPress={() => setSelected(routeName)}
    >
      {selected == routeName ? (
        <View style={styles.activeWrapper}>{TabIconSelector(routeName)}</View>
      ) : (
        <>
          <View style={{ marginBottom: 4 }}>{TabIconSelector(routeName)}</View>
          <Text style={typographyStyles.NavigationTab}>{routeName}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    position: "relative",
    width: 100,
    height: 30,
    justifyContent: "center",
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
    top: -25,
  },
});
