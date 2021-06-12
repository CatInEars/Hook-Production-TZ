import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { RecomendedSlider } from './RecomendedSlider';

export function BuyWithThisProduct() {
  return (
    <>
      <View style={commonStyles.buyContainer}>
        <Text style={commonStyles.buyText}>
          Buy with this product
        </Text>
      </View>
      <RecomendedSlider />
    </>
  );
}