import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { inputsArr } from '../../modules/inputsArr';
import { Bag } from '../../svg/Bag';
import { Input } from '../components/Input';

export function CartForm() {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
        <Text style={commonStyles._cartTitle}>
          Delivery address
        </Text>

        <Bag />
      </View>


      <View 
        style={{
          flexDirection: 'row', 
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: 18,
        }}
      >
        {
          inputsArr.map((item, index) => (
            <Input 
              width={item.width} 
              placeholder={item.name}
              propValue={item.value}
              key={`inputForm-${index}`}
            />
          ))
        }
      </View>
    </>
  );
}