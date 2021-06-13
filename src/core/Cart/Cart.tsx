import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { CartForm } from './CartForm';
import { HeaderBackground } from '../components/HeaderBackground';
import { CartList } from './CartList';
import { CartCard } from './CartCard';

export function Cart() {
  return (
    <>
      <Header
        title='Cart'
        toScreen='Product'
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{alignItems: 'center'}}>
          <HeaderBackground />
          <CartCard />
        </View>
      </ScrollView>
    </>
  );
}