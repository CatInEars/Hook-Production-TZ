import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { BuyWithThisProduct } from './BuyWithThisProduct/BuyWithThisProduct';
import { ProductCard } from './ProdcutCard/ProductCard';
import { AnchorsContent } from './AnchorsContent/AnchorsContent';

export function Product() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{alignItems: 'center'}}>
        <Header 
          title={'Milk & Cheese'}
        />
        <ProductCard />
        <BuyWithThisProduct />
        <AnchorsContent />
      </View>
    </ScrollView>
  );
}