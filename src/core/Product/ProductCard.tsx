import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ImageSlider } from './ImageSlider';
import { ProductName } from './ProductInfo';
import { Structure } from './Structure';

export function ProductCard() {
  return (
    <View style={commonStyles.productInfoContainer}>
      <Structure />
      <ImageSlider />
      <ProductName />
    </View>
  );
}