import React, { useRef } from 'react';
import { useState } from 'react';
import { TextInput, View, Animated, TouchableOpacity } from 'react-native';
import { ORANGE } from '../../common/colors';
import { commonStyles } from '../../common/commonStyles';
import { FONT } from '../../common/fontsFastImage';
import { PointerLight } from '../../svg/PointerLight';

interface IProps {
  width: number | string,
  placeholder: string
  propValue?: string,
  pointer?: boolean
}

export function Input({ width, placeholder, propValue = '', pointer = true}: IProps) {

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(propValue);
  const topPosition = useRef(new Animated.Value(!!propValue ? 1 : 0)).current;

  const handlePress = () => {
    setFocus(!focus);

    if (!focus) {
      Animated.timing(topPosition, {
        toValue: 1,
        duration: 90,
        useNativeDriver: false
      }).start();
    } else if (value === ''){
      Animated.timing(topPosition, {
        toValue: 0,
        duration: 90,
        useNativeDriver: false
      }).start();
    }
  }

  return (
    <View style={{
      ...commonStyles._inputContainer,
      borderColor: focus ? ORANGE : '#EBEBEB',
      width
    }}>
      <TextInput
        style={commonStyles._input}
        onFocus={handlePress}
        onBlur={handlePress}
        value={value}
        onChangeText={newValue => setValue(newValue)}
      />
      <Animated.Text
        style={{
          position: 'absolute',
          color: '#878786',
          ...FONT.Noto500,
          left: topPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 6]
          }),
          top: topPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 1]
          }),
          fontSize: topPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 12]
          })
        }}
      >
        {placeholder}
      </Animated.Text>
      
      {
        pointer ?
        <TouchableOpacity
          style={commonStyles._inputPointer}
        >
          <PointerLight />
        </TouchableOpacity>
        :
          null
      }
    </View>
  );
}