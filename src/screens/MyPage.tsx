import React from 'react';
import {Text, View} from 'react-native';
import {screenStyle} from './common.styles';

export default function MyPageScreen() {
  return (
    <View style={screenStyle.container}>
      <Text>MyPage</Text>
    </View>
  );
}
