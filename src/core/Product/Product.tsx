import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { BuyWithThisProduct } from './BuyWithThisProduct/BuyWithThisProduct';
import { ProductCard } from './ProdcutCard/ProductCard';

export function Product() {
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <Header 
          title={'Milk & Cheese'}
        />
        <ProductCard />
        <BuyWithThisProduct />
      </View>
    </ScrollView>
  );
}