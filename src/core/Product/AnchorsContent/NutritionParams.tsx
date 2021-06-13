import React, { useState } from 'react';
import { useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { params } from '../../../modules/paramsArr';
import { Pointer } from '../../../svg/Pointer';

export function NutritionParams() {
  const [isShow, setIsShow] = useState(false);
  const topPosition = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (isShow) {
      setIsShow(false);
      Animated.timing(topPosition, {
        duration: 500,
        toValue: 0,
        useNativeDriver: false
      }).start();
    } else {
      setIsShow(true);
      Animated.timing(topPosition, {
        duration: 500,
        toValue: 1,
        useNativeDriver: false
      }).start();
    }
  }

  return (
    <Animated.View 
      style={{
        ...commonStyles.nutritionParamsSlideContainer,
        height: topPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [45, 240]
        })
      }}
    >
      <Animated.View 
        style={{
          ...commonStyles.nutritionParamsSlide,
          top: topPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [-180, 0]
          })
        }}
      >
        {
          params.map((item, index) => (
            <View 
              style={commonStyles.nutritionParamsCard}
              key={`nutritionCard-${index}`}
            >
              <Text style={commonStyles.nutritionParamsValue}>
                {item.value} {item.unit}
              </Text>

              <Text style={commonStyles.nutritionParamsType}>
                {item.type}
              </Text>

              <View style={commonStyles.nutritionParamsRiContainer}>
                <View style={commonStyles.nutritionParamsRiTextContainer}>
                  <Text style={commonStyles.nutritionParamsRiText}>
                    {item.Ri}% RI
                  </Text>
                </View>

                {
                  !!item?.low ?
                    <View style={commonStyles.nutritionParamsLowContainer}>
                      <Text style={commonStyles.nutritionParamsLowText}>
                        Low
                      </Text>
                    </View>
                  :
                    null
                }
              </View>
            </View>
          ))
        }

        <TouchableOpacity
          onPress={handlePress}
          style={commonStyles.nutritionParamsButton}
          activeOpacity={0.6}
        >
          <>
            <Text style={commonStyles.nutritionParamsButtonText}>
              { isShow ? 'Hide' : 'Show' }
            </Text>

            <Animated.View
              style={{
                transform: [
                  {
                    rotate: topPosition.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['180deg', '0deg']
                    })
                  }
                ]
              }}
            >
            <Pointer />
            </Animated.View>
          </>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}