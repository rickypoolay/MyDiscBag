import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BagsStack from "./src/stacks/BagsStack";
import { colors } from "./src/styles/Colors";
import DiscsStack from "./src/stacks/DiscsStack";
import ProfileStack from "./src/stacks/ProfilesStack";
import TabBarButton from "./src/components/TabBarButton";
import { Text } from "react-native";
import AllDiscsIcon from "./assets/AllDiscsIcon";
import { ROUTES } from "./src/utils/constants";
import Tabbar from "./src/components/Tabbar";

const RootStack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        tabBar={(props) => <Tabbar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ROUTES.RootStack.InitialRoute}
      >
        <RootStack.Screen
          name={ROUTES.RootStack.AllDiscs}
          component={DiscsStack}
        />
        <RootStack.Screen
          name={ROUTES.RootStack.AllBags}
          component={BagsStack}
        />
        <RootStack.Screen
          name={ROUTES.RootStack.Profiles}
          component={ProfileStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
