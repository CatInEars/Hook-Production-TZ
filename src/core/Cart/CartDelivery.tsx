import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { LighterCart } from '../../svg/LighterCart';
import { BoxShadow } from 'react-native-shadow'
import { shadowSettings } from '../../modules/shadowSettings';
import { connect } from 'react-redux';
import { findSumm } from '../../modules/findSum';
import { useEffect } from 'react';

interface IProps {
  promocode: boolean,
  cart: ICartProductsData
}

function cartDelivery({ promocode, cart }: IProps) {

  const [priceSumm, setPriceSumm] = useState(findSumm(cart));

  const handlePress = () => {
    ToastAndroid.show('Надеюсь вы оценили лягушку :)', ToastAndroid.SHORT);
  }

  useEffect(() => {
    setPriceSumm(findSumm(cart));
  }, [cart, promocode])

  return (
    <View style={commonStyles.cartDeliveryContainer}>
      <View>
        <BoxShadow setting={shadowSettings}>
          <LighterCart style={{marginTop: 5, marginLeft: 6}} />
        </BoxShadow>
      </View>

      <View>
        <Text style={commonStyles.deliveryLight}>
          Delivery:
        </Text>
        <Text style={{
          color: 'white',
          fontWeight: 'bold'
        }}>
          25-30 min
        </Text>
      </View>

      <View>
        <Text style={commonStyles.deliveryLight}>
          Total:
        </Text>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white'
        }}>
          £{(priceSumm - (0.4 * +promocode)).toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
      >
        <View style={commonStyles.deliveryButtonContainer}>
          <Text style={commonStyles.deliveryButtonText}>
            Checkout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export const CartDelivery = connect(
  (state: IState) => ({
    cart: state.cart,
    promocode: state.promocode
  })
)(cartDelivery);