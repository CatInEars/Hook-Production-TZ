import React from 'react';
import { View } from 'react-native';
import { Product } from './core/Product/Product';

export function Main() {
  return (
    <View style={{backgroundColor: '#F5F4F2'}}>
      <Product />
    </View>
  );
}