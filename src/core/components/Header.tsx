import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ORANGE } from '../../common/colors';
import { commonStyles } from '../../common/commonStyles';
import { ArrowLeft } from '../../svg/ArrowLeft';

interface IProps {
  title: string
  toScreen: string
}

export function Header({ title, toScreen }: IProps) {
  const { navigate } = useNavigation();

  return (
    <View style={commonStyles.headerSticky}>
      <TouchableOpacity
        onPress={() => navigate(toScreen)}
        style={commonStyles.headerArrowContainer}
      >
        <ArrowLeft />
      </TouchableOpacity>

      <Text style={commonStyles.headerText}>{title}</Text>
    </View>
  );
}