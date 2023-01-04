import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import TabBarButton from "./TabBarButton";

export default function Tabbar(props: any) {
  const { state } = props;
  console.log(props.state.routes);
  const [selected, setIsSelected] = useState();
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.tabsWrapper}>
        <FlatList
          data={state.routeNames}
          horizontal
          centerContent
          renderItem={(name) => (
            <TabBarButton
              routeName={name.item}
              selected={selected}
              setSelected={setIsSelected}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.darkGreen,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  tabsWrapper: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
  },
});
