import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle } from "react-native-svg";

export default function AllDiscsIcon() {
  return (
    <Svg width="30" height="30" viewBox="0 0 27 26" fill="none">
      <Circle cx="6.75" cy="19.0761" r="5.75" stroke="white" stroke-width="2" />
      <Circle
        cx="20.25"
        cy="19.0761"
        r="5.75"
        stroke="white"
        stroke-width="2"
      />
      <Circle cx="13.5" cy="6.75" r="5.75" stroke="white" stroke-width="2" />
    </Svg>
  );
}
