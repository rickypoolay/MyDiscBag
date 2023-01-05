import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/Colors";
import TabBarButton from "./TabBarButton";
import { ROUTES } from "../utils/constants";

export default function Tabbar(props: any) {
  const { state } = props;
  console.log(props.state);
  const [selected, setIsSelected] = useState(ROUTES.RootStack.InitialRoute);

  useEffect(() => {
    props.navigation.navigate(selected);
  }, [selected]);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.tabsWrapper}>
        {state.routeNames.map((item: string) => (
          <TabBarButton
            navigation={props.navigation}
            routeName={item}
            selected={selected}
            setSelected={setIsSelected}
            key={item}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.lighterBlack,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  tabsWrapper: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
