import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import AllDiscs from "../screens/AllDiscs";
import { colors } from "../styles/Colors";

export default function DiscsStack() {
  const DiscsStack = createStackNavigator();

  return (
    <DiscsStack.Navigator
      screenOptions={{
        header: (e) => <Header stackNavigation={e} />,
        cardStyle: { backgroundColor: colors.appBackgroundColor },
      }}
    >
      <DiscsStack.Screen name="My Discs" component={AllDiscs} />
    </DiscsStack.Navigator>
  );
}
