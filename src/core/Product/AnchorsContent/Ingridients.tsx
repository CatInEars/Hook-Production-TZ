import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';

export function Ingridients() {
  return (
    <View>
      <Text style={commonStyles._anchorsTitle}>
        Ingridients
      </Text>

      <Text style={commonStyles._anchorsText}>
        Lorem ipsum dolor sit amet, <Text style={commonStyles._bold}>consectetur adipiscing</Text> {' '}
        elit. Ultrices at egestas tempus duis egestas semper 
        dolor <Text style={commonStyles._bold}>morbi purus.</Text> 
      </Text>

      <View 
        style={{
          ...commonStyles.productLine,
          marginTop: 32
        }}
      />
    </View>
  );
}