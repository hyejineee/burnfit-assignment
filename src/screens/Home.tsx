import React from 'react';
import {Text, View} from 'react-native';
import {screenStyle} from './common.styles';

export default function HomeScreen() {
  return (
    <View style={screenStyle.container}>
      <Text>Home</Text>
    </View>
  );
}
