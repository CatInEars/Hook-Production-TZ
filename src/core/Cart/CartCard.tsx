import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { CartForm } from './CartForm';
import { CartList } from './CartList';

export function CartCard() {
  return (
    <View style={commonStyles.cartAdressContainer}>
      <CartForm />
      <CartList />
    </View>
  );
}