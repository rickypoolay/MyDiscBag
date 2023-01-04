import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors, globalStyles, typographyStyles } from "../styles/Index";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Header({
  stackNavigation,
  customTitle,
}: {
  stackNavigation: any;
  customTitle?: string;
}) {
  return (
    <SafeAreaView style={{ backgroundColor: colors.appBackgroundColor }}>
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={stackNavigation.back ? 0.4 : 1}
        onPress={() => {
          stackNavigation.back ? stackNavigation.navigation.goBack() : null;
        }}
      >
        {/* If navigation is able to go back then render */}
        {stackNavigation.back && (
          <AntDesign
            name={"left"}
            color={"white"}
            size={20}
            style={styles.leftIcon}
          />
        )}
        <Text style={typographyStyles.Header1}>
          {customTitle ? customTitle : stackNavigation.route.name}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20,
    alignItems: "center",
  },

  leftIcon: {
    marginRight: 5,
  },
});
