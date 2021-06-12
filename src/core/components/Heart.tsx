import React, { useState } from 'react';
import { useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { HeartActiveIcon } from '../../svg/HeartActiveIcon';
import { HeartEmptyIcon } from '../../svg/HeartEmptyIcon';

export function Heart() {
  const [liked, setLiked] = useState(false);
  const widthHeight = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setLiked(!liked);
    if (liked) {
      Animated.timing(widthHeight, {
        toValue: 0,
        duration: 160,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(widthHeight, {
        toValue: 1,
        duration: 160,
        useNativeDriver: false
      }).start();
    }
  }
  
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.75}
    >
      <View style={commonStyles.heartIconContainer}>
        <Animated.View
          style={{
            width: widthHeight.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [28, 32, 28]
            }),
            height: widthHeight.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [28, 32, 28]
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