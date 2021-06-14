import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { HeaderBackground } from '../components/HeaderBackground';
import { CartCard } from './CartCard';
import { CartDelivery } from './CartDelivery';
import { Payment } from './Payment';

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
          <Payment />
        </View>
      </ScrollView>

      <CartDelivery />
    </>
  );
}