import {ReactNode} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarScreen from '../screens/Calendar';
import HomeScreen from '../screens/Home';
import LibraryScreen from '../screens/Library';
import MyPageScreen from '../screens/MyPage';

export type Screen = {
  name: string;
  component: React.ComponentType;
  icon: ReactNode;
};

export const SCREENS: Screen[] = [
  {name: 'Home', component: HomeScreen, icon: <Icon name="home" size={24} />},
  {
    name: 'Calendar',
    component: CalendarScreen,
    icon: <Icon name="calendar" size={24} />,
  },
  {
    name: 'Library',
    component: LibraryScreen,
    icon: <Icon name="barbell" size={24} />,
  },
  {
    name: 'MyPage',
    component: MyPageScreen,
    icon: <Icon name="person" size={24} />,
  },
];
