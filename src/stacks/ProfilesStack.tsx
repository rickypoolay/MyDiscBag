import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import Profiles from "../screens/Profiles";
import { colors } from "../styles/Colors";

export default function ProfileStack() {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        header: (e) => <Header stackNavigation={e} />,
        cardStyle: { backgroundColor: colors.appBackgroundColor },
      }}
    >
      <ProfileStack.Screen name="My Profile" component={Profiles} />
    </ProfileStack.Navigator>
  );
}
