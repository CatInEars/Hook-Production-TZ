import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React from 'react';
import { CartScreen } from './navigation/CartScreen';
import { ProductScreen } from './navigation/ProductScreen';

const Stack = createStackNavigator();

export function Main() {

  const [Fontloaded] = useFonts({
    'Mukta700': require('../assets/fonts/Mukta700.ttf'),
    'Noto500': require('../assets/fonts/Noto500.ttf'),
    'Noto700': require('../assets/fonts/Noto700.ttf'),
    'Open300': require('../assets/fonts/Open300.ttf'),
    'Open400': require('../assets/fonts/Open400.ttf'),
    'Open600': require('../assets/fonts/Open600.ttf')
  });

  return (
    <>
      {
        Fontloaded
      ?
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationTypeForReplace: 'push'
          }}
        >
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      :
        null
      }
    </>
  );
}