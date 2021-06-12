import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ArrowLeft } from '../../svg/ArrowLeft';

export function Header() {
  return (
    <View style={commonStyles.headerContainer}>
      <TouchableOpacity style={commonStyles.headerArrowContainer}>
        <ArrowLeft />
      </TouchableOpacity>

      <Text style={commonStyles.headerText}>{'Milk & Cheese'}</Text>
    </View>
  );
}