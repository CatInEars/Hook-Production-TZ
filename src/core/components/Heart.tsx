import React, { useState } from 'react';
import { useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { HeartActiveIcon } from '../../svg/HeartActiveIcon';
import { HeartEmptyIcon } from '../../svg/HeartEmptyIcon';

interface IProps {
  style?: any
}

export function Heart({ style }: IProps) {
  const [liked, setLiked] = useState(false);
  const widthHeight = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setLiked(!liked);
    if (liked) {
      Animated.timing(widthHeight, {
        toValue: 0,
        duration: 180,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(widthHeight, {
        toValue: 1,
        duration: 180,
        useNativeDriver: false
      }).start();
    }
  }
  
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={{...commonStyles.heartIconContainer, ...style}}>
        <Animated.View
          style={{
            width: widthHeight.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [25, 29, 25]
            }),
            height: widthHeight.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [25, 29, 25]
            })
          }}
        >
          {
            liked ?
              <HeartActiveIcon />
            :
              <HeartEmptyIcon />
          }
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}