import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { Nutrition } from './Nutrition';

export function AnchorsContent() {
  return (
    <View style={commonStyles.anchorsCardContainer}>
      <Nutrition />
    </View>
  );
}