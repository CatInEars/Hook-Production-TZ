import React, { Dispatch, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { CompleateIcon } from '../../svg/CompleateIcon';

interface IProps {
  promocode: boolean,
  onPromocodeChange: any,
  cart: {
    [id: number]: ICartProduct
  }
}

function payment({ onPromocodeChange, promocode, cart }: IProps) {

  const findSumm = (): number => {
    let sum = 0;
    for (let key in cart) {
      sum += cart[key].cartCount * cart[key].price
    }
    return +sum.toFixed(2);
  };

  const [value, setValue] = useState('GHYU907H');
  const [priceSumm, setPriceSumm] = useState<number>(findSumm())

  useEffect(() => {
    setPriceSumm(findSumm());
  }, [promocode, cart])

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (newValue.length !== 8) {
      return onPromocodeChange(false);
    }
    onPromocodeChange(true);
  }
  
  return (
    <View style={commonStyles.paymentContainer}>
      <Text style={commonStyles._cartTitle}>
        Payment
      </Text>

      <View style={commonStyles.promoInputContainer}>
        <TextInput 
          value={value}
          onChangeText={handleChange}
          style={commonStyles.promoInput}
          maxLength={8}
        />

        {
          promocode ?
            <CompleateIcon 
              style={{
                position: 'absolute',
                right: 9,
                top: 10
              }}
            />
          :
            null
        }
      </View>

      <View style={commonStyles.cartMainPriceContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text style={commonStyles.cartPaymentText}>
              Order:
            </Text>
            <Text style={commonStyles.cartPaymentText}>
              Delivery
            </Text>
            {
              promocode ?
                <Text style={{
                  ...commonStyles.cartPaymentText,
                  color: '#E5243F'
                }}>
                  Promocode
                </Text>
              :
                null
            }
          </View>

          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Text style={commonStyles.cartPaymentText}>
              {'£'} {priceSumm}
            </Text>
            <Text style={commonStyles.cartPaymentText}>
              {'£'} 0.4
            </Text>
            {
              promocode ?
                <Text style={{
                  ...commonStyles.cartPaymentText,
                  color: '#E5243F'
                }}>
                  - {'£'} 0.4
                </Text>
              :
                null
            }
          </View>
        </View>

        <View style={commonStyles.productLine} />
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={commonStyles.totalSumm}>
            Total:
          </Text>
          <Text style={commonStyles.totalSumm}>
            {'£'} {(priceSumm - (0.4 * +promocode)).toFixed(2)}
          </Text>
        </View>
      </View>

    </View>
  );
}

export const Payment = connect(
  (state: IState) => ({
    promocode: state.promocode,
    cart: state.cart
  }),
  (dispatch: Dispatch<IActions>) => ({
    onPromocodeChange: (value: boolean) => {
      dispatch({ type: 'PROMOCODE_CHANGE', value})
    } 
  })
)(payment);