import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { CartInteraction } from '../components/CartInteraction';

interface IProps {
  item: ICartProduct,
  index: number
}

export function CartItem({ item, index }: IProps) {
  return (
    <>
    {
      index > 1 ?
        <View style={{width: '100%', height: 1, backgroundColor: '#F2F2F2'}} />
      :
        null
    }
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

        {
          !!item.priceChanged ?
            <Text style={commonStyles.offerSend}>
              Price has been changed: {' '}
              <Text style={commonStyles._lineThrough}>(£2.59)</Text>
            </Text>
          :
            null
        }

        {
          !!item.sale ?
            <Text style={{...commonStyles.offerSend, width: 82}}>
              Special offer: 
              <Text style={commonStyles._bold}>-20%</Text>
            </Text>
          :
            null
        }
        
        <View style={{flexDirection: 'row'}}>
          <Text style={{
            ...commonStyles.cartItemPrice,
            color: !!item.priceChanged || !!item.sale ? '#E5243F' : 'black'
          }}>
            {item.currency}{item.price}
          </Text>
          <Text style={commonStyles.cartItemCount}>
            {' '} · {item.count} / {item.currency}{item.price}
          </Text>
        </View>

        {
          !!item.sale ?
            <Text style={{
              ...commonStyles._lineThrough,
              fontSize: 10,
              color: '#999999'
            }}>
              {item.currency}1.59
            </Text>
          :
            null
        }
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
    </>
  );
}