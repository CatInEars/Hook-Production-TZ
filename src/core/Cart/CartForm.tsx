import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { inputsArr } from '../../modules/inputsArr';
import { Bag } from '../../svg/Bag';
import { Input } from '../components/Input';

export function CartForm() {
  return (
    <>
      <View style={commonStyles.cartFormTitleContainer}> 
        <Text style={commonStyles._cartTitle}>
          Delivery address
        </Text>

        <Bag />
      </View>


      <View style={commonStyles.cartFormInputsContainer}>
        {
          inputsArr.map((item, index) => (
            <Input 
              width={item.width} 
              placeholder={item.name}
              propValue={item.value}
              key={`inputForm-${index}`}
              pointer={index === 0 ? true : false}
            />
          ))
        }
      </View>
    </>
  );
}