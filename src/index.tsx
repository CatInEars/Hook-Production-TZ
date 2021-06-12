import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from './common/commonStyles';

export function Main() {
  return (
    <View style={commonStyles._center}>
      <Text>Component Text</Text>
    </View>
  );
}