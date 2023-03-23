import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screen, SCREENS} from './screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      {SCREENS.map((screen: Screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: () => screen.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
