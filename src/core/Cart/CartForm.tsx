import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { inputsArr } from '../../modules/inputsArr';
import { TrashNBC } from '../../svg/TrashNBC';
import { Input } from '../components/Input';

export function CartForm() {

  const [cleared, setCleared] = useState(0);

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
        <Text style={commonStyles._cartTitle}>
          Delivery address
        </Text>

        <TouchableOpacity
          onPress={() => setCleared(cleared + 1)}
          activeOpacity={0.5}
        >
          <TrashNBC />
        </TouchableOpacity>
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
              clearTrigger={cleared}
              propValue={item.value}
              key={`inputForm-${index}`}
            />
          ))
        }
      </View>
    </>
  );
}