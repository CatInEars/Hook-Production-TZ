import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ImageSlider } from './ImageSlider';
import { Structure } from './Structure';

export function ProductInfo() {
  return (
    <View style={commonStyles.productInfoContainer}>
      <Structure />
      <ImageSlider />
    </View>
  );
}