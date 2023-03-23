import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
