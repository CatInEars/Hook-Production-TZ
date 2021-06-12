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
  onIncrement: any
  onDecrement: any
}

function cartInteraction({ id, cart, onIncrement, onDecrement }: IProps) {
  const [cartCount, setCartCount] = useState(cart[id].count);

  useEffect(() => {
    setCartCount(cart[id].count);
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
              width={45}
              height={45}
            />
          </TouchableOpacity>

          <Text style={commonStyles.cartCountText}>
            {cartCount}
          </Text>
        </>
        :
        <Text style={commonStyles.cartAddText}>
          Add
        </Text>
      }

      <TouchableOpacity
        onPress={() => onIncrement(id)}
        activeOpacity={0.6}
      >
        <Plus 
          width={45}
          height={45}
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