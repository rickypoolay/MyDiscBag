import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import Header from "../../components/Header";
import { colors, typographyStyles, globalStyles } from "../../styles/Index";

export default function IndividualBag(navStack: any) {
  const bagData = navStack.route.params.bagData.item;
  useEffect(() => {
    navStack.navigation.setOptions({
      header: (e: any) => (
        <Header stackNavigation={e} customTitle={bagData.bagName} />
      ),
    });
  }, []);

  return (
    <View style={globalStyles.pageContainer}>
      <Text style={{ ...typographyStyles.Header2, textAlign: "center" }}>
        {/* If json contains drivers then render and etc.. for other categories */}
        Drivers
      </Text>
    </View>
  );
}
