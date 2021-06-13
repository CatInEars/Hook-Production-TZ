import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';

interface IProps {
  cart: {
    [id: number]: ICartProduct
  } 
}

function cartList({ cart }: IProps) {
  const itemArr = [];

  for (let key in cart) {
    if (cart[key].cartCount !== 0) {
      itemArr.push(
        <View 
          style={{
            width: '100%',
            paddingVertical: 14,
            paddingHorizontal: 10,
            height: 80
          }}
          key={`cartItem-${key}`}
        >
          <Text>{cart[key].name}</Text>
        </View>
      );
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