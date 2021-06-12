import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { Header } from '../components/Header';
import { ProductInfo } from './ProductInfo';

export function Product() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Header 
        title={'Milk & Cheese'}
      />
      <ProductInfo />
    </View>
  );
}