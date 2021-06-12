import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { Header } from '../components/Header';
import { ProductCard } from './ProductCard';

export function Product() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Header 
        title={'Milk & Cheese'}
      />
      <ProductCard />
    </View>
  );
}