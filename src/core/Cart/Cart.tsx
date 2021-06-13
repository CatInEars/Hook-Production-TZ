import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { CartAdress } from './CartAdress';
import { HeaderBackground } from '../components/HeaderBackground';

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
          <CartAdress />
        </View>
      </ScrollView>
    </>
  );
}