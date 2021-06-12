import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Animated, View, TouchableWithoutFeedback } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { HeartIcon } from '../../svg/HeartIcon';

export function Heart() {
  const [liked, setLiked] = useState(false);
  const widthHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthHeight, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }, [liked]);
  
  return (
    <TouchableWithoutFeedback
      onPress={() => setLiked(!liked)}
    >
      <Animated.View 
        style={{
          ...commonStyles.heartIconContainer,
          width: 24, 
          height: 22
        }}
      >
        <HeartIcon />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}