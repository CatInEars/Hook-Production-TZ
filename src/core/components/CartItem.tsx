import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { CartInteraction } from '../components/CartInteraction';

interface IProps {
  item: ICartProduct
}

export function CartItem({ item }: IProps) {
  return (
    <View style={commonStyles.cartItemContainer}>
      <View>
        <Image 
          source={item.previeImage} 
          style={commonStyles.cartItemImage} 
        />
      </View>

      <View style={{width: '50%', height: '100%', justifyContent: "space-evenly"}}>
        <Text style={commonStyles.cartItemName}>
          {item.name}
        </Text>
        
        <View style={{flexDirection: 'row'}}>
          <Text style={commonStyles.cartItemPrice}>
            {item.currency}{item.price}
          </Text>
          <Text style={commonStyles.cartItemCount}>
            {' '} · {item.count} / {item.currency}{item.price}
          </Text>
        </View>
      </View>

      <View style={{justifyContent: 'flex-end', height: '100%'}}>
        <CartInteraction
          id={item.id}
          fontSize={14}
          width={28}
          height={28}
        />
      </View>
    </View>
  );
}