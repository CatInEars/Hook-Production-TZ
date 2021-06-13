import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CartScreen } from './navigation/CartScreen';
import { ProductScreen } from './navigation/ProductScreen';

const Stack = createStackNavigator();

export function Main() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}