import { View, Text, FlatList } from "react-native";
import React from "react";
import { globalStyles, colors } from "../../styles/Index";
import BagCard from "../../components/BagCard";
import mockData from "../../utils/mockData.json";

export default function AllBags() {
  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={mockData.bags}
        renderItem={(data) => (
          <View style={{ marginBottom: 14 }}>
            <BagCard bagData={data} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
