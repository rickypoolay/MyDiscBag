import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import AllDiscs from "../screens/AllDiscs";

export default function DiscsStack() {
  const DiscsStack = createStackNavigator();

  return (
    <DiscsStack.Navigator
      screenOptions={{ header: (e) => <Header stackNavigation={e} /> }}
    >
      <DiscsStack.Screen name="All Discs" component={AllDiscs} />
    </DiscsStack.Navigator>
  );
}
