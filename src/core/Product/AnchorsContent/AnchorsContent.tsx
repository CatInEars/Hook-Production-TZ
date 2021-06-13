import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { Ingridients } from './Ingridients';
import { Nutrition } from './Nutrition';
import { Other } from './Other';

export function AnchorsContent() {
  return (
    <View style={commonStyles.anchorsCardContainer}>
      <Nutrition />
      <Ingridients />
      <Other />
    </View>
  );
}