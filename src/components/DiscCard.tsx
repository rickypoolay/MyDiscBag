import { View, Text, Image } from "react-native";
import React from "react";

const DiscCard = ({ disc, styles }: { disc: any; styles: any }) => {
  return (
    <View style={styles.individualDiscCard}>
      <Text style={styles.text}>{disc.brand}</Text>
      <Text style={styles.text}>{disc.discName}</Text>
      <View style={styles.discStats}>
        <Text style={styles.text}>{disc.speed}</Text>
        <Text style={styles.text}>{disc.glide}</Text>
        <Text style={styles.text}>{disc.turn}</Text>
        <Text style={styles.text}>{disc.fade}</Text>
      </View>
    </View>
  );
};

export default DiscCard;
