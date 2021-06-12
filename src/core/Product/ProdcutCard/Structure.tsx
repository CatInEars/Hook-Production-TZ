import React from 'react';
import { View, Text } from 'react-native';
import { TEXT_COLOR_GRAY } from '../../../common/colors';
import { commonStyles } from '../../../common/commonStyles';
import { Nut } from '../../../svg/Nut';
import { Water } from '../../../svg/Water';
import { Wheat } from '../../../svg/Wheat';
import { Heart } from '../../components/Heart';

export function Structure() {
  return (
    <View style={commonStyles.structureContainer}>
      <Wheat style={{marginHorizontal: 6}} />
      <Water style={{marginHorizontal: 6}} />
      <Nut style={{marginHorizontal: 6}} />
      <Text style={{
        color: TEXT_COLOR_GRAY,
        fontSize: 11
      }}>
        +3
      </Text>
      <View style={{position: 'absolute', right: 16}}>
        <Heart />
      </View>
    </View>
  );
}