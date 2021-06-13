import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { TextInput, View, Animated } from 'react-native';
import { ORANGE, TEXT_COLOR_BLACK } from '../../common/colors';

interface IProps {
  width: number | string,
  placeholder: string
  propValue?: string
}

export function Input({ width, placeholder, propValue = '' }: IProps) {

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
    <View
      style={{
        borderWidth: 1,
        borderColor: focus ? ORANGE : '#EBEBEB',
        borderStyle: 'solid',
        borderRadius: 10,
        marginBottom: 12,
        height: 54,
        position: 'relative',
        justifyContent: 'flex-end',
        width
      }}
    >
      <TextInput
        style={{
          paddingHorizontal: 12,
          color: TEXT_COLOR_BLACK,
          width: '100%',
          height: '80%',
        }}
        onFocus={handlePress}
        onBlur={handlePress}
        value={value}
        onChangeText={newValue => setValue(newValue)}
      />
      <Animated.Text
        style={{
          position: 'absolute',
          color: '#878786',
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
    </View>
  );
}