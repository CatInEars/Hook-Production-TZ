import { StyleSheet } from 'react-native';
import { ORANGE, TEXT_COLOR_BLACK, TEXT_COLOR_GRAY } from './colors';

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  _bold: {
    fontWeight: 'bold'
  },
  headerContainer: {
    position: 'relative',
    width: '100%', 
    height: 135, 
    backgroundColor: ORANGE,
    paddingTop: 33,
    borderBottomRightRadius: 10, 
    borderBottomLeftRadius: 10,
  },
  headerText: {
    marginTop: 4,
    color: TEXT_COLOR_BLACK,
    fontSize: 24,
    textAlign: 'center'
  },
  headerArrowContainer: {
    position: 'absolute',
    top: 45,
    left: 12,
    width: 24, 
    height: 24, 
    justifyContent: 'center',
    zIndex: 1
  },
  productInfoContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10, 
    marginTop: -51,
    alignItems: 'center'
  },
  structureContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    height: 36, 
    marginVertical: 16, 
    position: 'relative'
  },
  heartIconContainer: {
    width: 29, 
    height: 29, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  structureHeartContainer: {
    position: 'absolute', 
    right: 16
  },
  sliderImage: {
    width: 300 - 30, 
    height: 270, 
    marginHorizontal: 15,
    resizeMode: 'contain'
  },
  sliderDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
  productNameContainer: {
    marginTop: 15,
    width: '80%'
  },
  productNameText: {
    color: TEXT_COLOR_BLACK,
    fontSize: 17
  },
  productCountPrice: {
    color: '#999999',
    marginVertical: 8,
    fontSize: 15
  },
  productPrice: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cartCountText: {
    fontSize: 18,
    color: TEXT_COLOR_BLACK,
    marginHorizontal: 10
  },
  cartAddText: {
    color: ORANGE,
    fontSize: 17,
    marginRight: 10,
    fontWeight: 'bold'
  },
  productLine: {
    height: 1,
    borderRadius: 1,
    backgroundColor: '#EBEBEB',
    marginTop: 14
  },
  productAnchorsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 16
  },
  productAnchorsText: {
    color: ORANGE,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16
  },
  buyContainer: {
    marginTop: 28,
    width: '100%',
    justifyContent: 'flex-start'
  },
  buyText: {
    color: TEXT_COLOR_BLACK,
    fontSize: 16,
    paddingLeft: 22,
    fontWeight: 'bold'
  },
  recomendedSliderContainer: {
    marginTop: 14,
  },
  recomendedContainer: {
    backgroundColor: 'white',
    width: 175,
    height: 320,
    marginRight: 12,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 14,
    paddingTop: 6
  },
  recomendedImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: -14
  },
  recomendedText: {
    color: TEXT_COLOR_BLACK
  },
  recomendedCount: {
    fontSize: 13,
    color: '#878786',
    marginTop: 6,
    marginBottom: 14,
    width: '100%',
    alignItems: 'flex-start'
  },
  recomendedPrice: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  anchorsCardContainer: {
    width: '90%',
    height: 800,
    backgroundColor: 'white',
    zIndex: 100,
    position: 'relative',
    borderRadius: 10,
    marginTop: 28,
    padding: 22
  },
  nutritionTitle: {
    fontSize: 22,
    color: TEXT_COLOR_BLACK
  },
  nutritionText: {
    marginTop: 14
  },
  nutritionListContainer: {
    flexDirection: 'row', 
    marginTop: 9, 
    alignItems: 'center'
  },
  nutritionListDot: {
    width: 5, 
    height: 5, 
    borderRadius: 4, 
    backgroundColor: '#999999', 
    marginRight: 12
  },
  nutritionListText: {
    color: '#999999',
    fontSize: 13
  },
  nutritionParamsSlideContainer: {
    position: 'relative', 
    overflow: 'hidden', 
    width: '100%',
    height: 230,
  },
  nutritionParamsSlide: {
    position: 'absolute', 
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  nutritionParamsCard: {
    width: '22%', 
    height: 85,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nutritionParamsValue: {
    fontSize: 18,
    color: TEXT_COLOR_BLACK
  },
  nutritionParamsType: {
    color: '#999999',
    fontSize: 12,
    marginBottom: 4
  },
  nutritionParamsRiContainer: { 
    flexDirection: 'row'
  },
  nutritionParamsRiTextContainer: {
    backgroundColor: '#EBEBEB', 
    paddingHorizontal: 5
  },
  nutritionParamsLowContainer: {
    backgroundColor: '#E7F7ED',
    paddingHorizontal: 5
  },
  nutritionParamsLowText: {
    color: '#0EB44D',
    fontSize: 10
  },
  nutritionParamsRiText: {
    fontSize: 11,
    color: '#707070'
  },
  nutritionParamsButton: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    height: 40,
    marginTop: 12,
  },
  nutritionParamsButtonText: {
    fontSize: 16,
    color: ORANGE,
    fontWeight: 'bold',
    marginRight: 12
  }
});