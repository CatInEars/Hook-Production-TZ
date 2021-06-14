import React from 'react';
import { View, Text } from 'react-native';
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
  let index = 0;

  for (let key in cart) {
    if (cart[key].cartCount !== 0) {

      index++;
      itemArr.push(
        <CartItem 
          item={cart[key]} 
          key={`cartItem-${key}`} 
          index={index} 
      />);
      
    };
  }

  return (
    <View style={{marginTop: 24}}>
      <Text style={commonStyles._cartTitle}>
        {itemArr.length} items
      </Text>

      <View>
        {
          itemArr.map((item) => item)
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