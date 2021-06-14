import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { FONT } from '../../common/fontsFastImage';
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
        <View style={commonStyles.cartLine} />
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

      <View style={commonStyles.cartItemInfoContainer}>
        <Text style={commonStyles.cartItemName}>
          {item.name}
        </Text>

        {
          !!item.priceChanged ?
            <Text style={commonStyles.offerSend}>
              Price has been changed: {' '}
              <Text style={commonStyles._lineThrough}>
                (£2.59)
              </Text>
            </Text>
          :
            null
        }

        {
          !!item.sale ?
            <Text 
              style={{...commonStyles.offerSend, width: 80}}
            >
              Special offer: 

              <Text style={commonStyles._bold}>
                -20%
              </Text>
            </Text>
          :
            null
        }
        
        <View style={commonStyles._row}>
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
              color: '#999999',
              ...FONT.Open400
            }}>
              {item.currency}1.59
            </Text>
          :
            null
        }
      </View>

      <View style={commonStyles.cartItemInteractiveContainer}>
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