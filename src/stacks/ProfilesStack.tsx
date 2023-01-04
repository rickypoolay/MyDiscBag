import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import Profiles from "../screens/Profiles";

export default function ProfileStack() {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator
      screenOptions={{ header: (e) => <Header stackNavigation={e} /> }}
    >
      <ProfileStack.Screen name="My Profile" component={Profiles} />
    </ProfileStack.Navigator>
  );
}
