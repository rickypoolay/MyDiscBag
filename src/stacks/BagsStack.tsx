import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import AllBags from "../screens/BagsStack/AllBags";
import IndividualBag from "../screens/BagsStack/IndividualBag";

export default function BagsStack() {
  const BagStack = createStackNavigator();

  return (
    <BagStack.Navigator
      screenOptions={{ header: (e) => <Header stackNavigation={e} /> }}
    >
      <BagStack.Screen name="My Bags" component={AllBags} />
      <BagStack.Screen name="Individual Bag" component={IndividualBag} />
    </BagStack.Navigator>
  );
}
