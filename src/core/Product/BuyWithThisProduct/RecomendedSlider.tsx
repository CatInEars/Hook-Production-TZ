import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../../common/commonStyles'
import { recomendedImageArr } from '../../../modules/sliderImageArr';
import { Heart } from '../../components/Heart';
import { CartInteraction } from '../../components/CartInteraction';

interface IProps {
  recomendedItem: IProductsData;
}

function recomendedSlider({ recomendedItem }: IProps) {
  return (
    <View style={commonStyles.recomendedSliderContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height: 330, paddingHorizontal: 22}}
      >
        {
          recomendedImageArr.map((item, index) => (
            <View 
              style={commonStyles.recomendedContainer}
              key={`recomended-${index}`}
            >
              <View style={commonStyles.sliderHeartContainer}>
                <Heart />
              </View>
              <Image source={item} style={commonStyles.recomendedImage} />

              <Text style={commonStyles.recomendedText}>
                {recomendedItem[index].name}
              </Text>

              <Text style={commonStyles.recomendedCount}>
                {recomendedItem[index].count} / {' '}
                {recomendedItem[index].currency}
                {recomendedItem[index].price}
              </Text>

              <View style={{...commonStyles._spaceBetween, width: '100%'}}>
                <Text style={commonStyles.recomendedPrice}>
                  {recomendedItem[index].currency}{recomendedItem[index].price}
                </Text>

                <CartInteraction
                  id={recomendedItem[index].id}
                  width={28}
                  height={28}
                  fontSize={14}
                />
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

export const RecomendedSlider = connect(
  (state: IState) => ({
    recomendedItem: state.recomendedItem
  })
)(recomendedSlider);