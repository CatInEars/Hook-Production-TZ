import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { CartItem } from '../components/CartItem';

interface IProps {
  cart: {
    [id: number]: ICartProduct
  } 
}

function cartList({ cart }: IProps) {
  const itemArr = [];

  for (let key in cart) {
    if (cart[key].cartCount !== 0) {
      itemArr.push(<CartItem item={cart[key]} key={`cartItem-${key}`} />);
    };
  }

  return (
    <View style={{marginTop: 24}}>
      <Text style={commonStyles._cartTitle}>
        2 items
      </Text>

      <View>
        {
          itemArr.map((item, index) => item)
        }
      </View>
    </View>
  );
}

export const CartList = connect(
  (state: IState) => ({
    cart: state.cart
  })
)(cartList);