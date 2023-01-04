import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { typographyStyles } from "../styles/Typography";
import { colors } from "../styles/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { BagStackParamsList } from "../types/stackTypes";
import { useNavigation } from "@react-navigation/native";

export default function BagCard({ bagData }: { bagData: any }) {
  const bagName = bagData.item.bagName;
  const bagItems = bagData.item.bagItems;
  const navigation = useNavigation<StackNavigationProp<BagStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.contentWrapper}
      onPress={() => {
        navigation.navigate("Individual Bag", { bagData: bagData });
      }}
    >
      <Text style={typographyStyles.Header3}>{bagName}</Text>
      <View style={styles.discsWrapper}>
        <View style={styles.discImage} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  discsWrapper: {
    marginTop: 8,
  },

  discImage: {
    height: 48,
    width: 48,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
