import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { NutritionParams } from './NutritionParams';

export function Nutrition() {
  const listTextArr = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Ultrices at egestas tempus',
    'Duis egestas semper dolor morbi purus.'
  ]
  return (
    <View>
      <Text style={{...commonStyles._anchorsTitle, marginTop: 0}}>
        Nutrition
      </Text>

      <Text style={commonStyles._anchorsText}>
        Lorem ipsum dolor sit amet, <Text style={commonStyles._bold}>consectetur adipiscing</Text>{' '}
        elit. Ultrices at egestas tempus duis egestas semper 
        dolor <Text style={commonStyles._bold}>morbi purus.</Text> Lorem ipsum dolor sit amet, {' '}
        <Text style={commonStyles._bold}>consectetur adipiscing</Text> elit. Ultrices at egestas 
        tempus duis egestas semper dolor <Text style={commonStyles._bold}>morbi purus.</Text>
      </Text>

      <View style={{marginTop: 12}}>
        {
          listTextArr.map((text, index) => (
            <View style={commonStyles.nutritionListContainer} key={`nutritionList-${index}`}>
              <View style={commonStyles.nutritionListDot} />
              <Text style={commonStyles.nutritionListText}>{text}</Text>
            </View>
          ))
        }
      </View>

      <View 
        style={{
          ...commonStyles.productLine,
          marginTop: 34
        }}
      />

      <NutritionParams />
    </View>
  );
}