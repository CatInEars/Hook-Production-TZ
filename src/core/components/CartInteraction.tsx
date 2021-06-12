import React, { Dispatch, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { Plus } from '../../svg/Plus';
import { Trash } from '../../svg/Trash';

interface IProps {
  id: number,
  cart: {
    [propName: number]: ICartProduct
  },
  width?: number,
  height?: number,
  onIncrement: any
  onDecrement: any,
  fontSize?: number
}

function cartInteraction({ 
  id, 
  cart, 
  onIncrement, 
  onDecrement,
  width,
  height,
  fontSize = 16
}: IProps) {
  const toBe = !!cart[id];
  const [cartCount, setCartCount] = useState(toBe ? cart[id].count : 0);

  useEffect(() => {
    setCartCount(toBe ? cart[id].count : 0);
  }, [cart])

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {
        !!cartCount ?
        <>
          <TouchableOpacity
            onPress={() => onDecrement(id)}
            activeOpacity={0.6}
          >
            <Trash 
              width={width}
              height={height}
            />
          </TouchableOpacity>

          <Text style={{
            ...commonStyles.cartCountText,
            fontSize
          }}>
            {cartCount}
          </Text>
        </>
        :
        <Text style={{
          ...commonStyles.cartAddText,
          fontSize: fontSize + 2
        }}>
          Add
        </Text>
      }

      <TouchableOpacity
        onPress={() => onIncrement(id)}
        activeOpacity={0.6}
      >
        <Plus 
          width={width}
          height={height}
        />
      </TouchableOpacity>
    </View>
  );
}

export const CartInteraction = connect(
  (state: IState) => ({
    cart: state.cart
  }),
  (dispatch: Dispatch<IActions>) => ({
    onIncrement: (id: number) => {
      dispatch({type: 'CART_COUNT_INCREMENT', id})
    },
    onDecrement: (id: number) => {
      dispatch({type: 'CART_COUNT_DECREMENT', id})
    }
  })
)(cartInteraction);