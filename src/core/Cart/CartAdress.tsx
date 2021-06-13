import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { TrashNBC } from '../../svg/TrashNBC';
import { Input } from '../components/Input';

export function CartAdress() {
  return (
    <View style={commonStyles.cartAdressContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
        <Text style={commonStyles.cartAdressText}>
          Delivery address
        </Text>

        <TouchableOpacity
          onPress={() => {}}
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
          marginTop: 36,
        }}
      >
        <Input width='100%' placeholder='City' propValue='SE1 6DR, 42 Newington Causeway...'/> 
        <Input width='32%' placeholder='Flat' propValue='133' />
        <Input width='32%' placeholder='Floor' />
        <Input width='32%' placeholder='Block' />
      </View>
    </View>
  );
}