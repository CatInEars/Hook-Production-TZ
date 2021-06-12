import React from 'react';
import { useRef } from 'react';
import { View, ScrollView, Image, Animated } from 'react-native';
import { TEXT_COLOR_BLACK, TEXT_COLOR_GRAY } from '../../common/colors';
import { commonStyles } from '../../common/commonStyles';
import { sliderImageArr } from '../../modules/sliderImageArr';

export function ImageSlider() {
  
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={{height: 300}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={{
            width: 300
          }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }], 
            {useNativeDriver: false}
          )}
        >
          {
            sliderImageArr.map((item, index) => (
              <Image 
                source={item} 
                key={`img-${index}`} 
                style={commonStyles.sliderImage} 
              />
            ))
          }
        </ScrollView>
      </View>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        {
          sliderImageArr.map((item, index) => {
            return (
              <Animated.View
                style={{
                  ...commonStyles.sliderDot,
                  width: scrollX.interpolate({
                    inputRange: [
                      300 * (index - 1),
                      300 * index,
                      300 * (index + 1)
                    ],
                    outputRange: [8, 20, 8],
                    extrapolate: "clamp"
                  }),
                  backgroundColor: scrollX.interpolate({
                    inputRange: [
                      300 * (index - 1),
                      300 * index,
                      300 * (index + 1)
                    ],
                    outputRange: [TEXT_COLOR_GRAY, TEXT_COLOR_BLACK, TEXT_COLOR_GRAY],
                    extrapolate: "clamp"
                  })
                }}
                key={`dot-${index}`}
              />

            )
          })
        }
      </View>
    </>
  );
}