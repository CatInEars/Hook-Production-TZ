import { StyleSheet } from 'react-native';
import { ORANGE, TEXT_COLOR_BLACK, TEXT_COLOR_GRAY } from './colors';
import { FONT } from './fontsFastImage';

export const commonStyles = StyleSheet.create({
  headerSticky: {
    backgroundColor: ORANGE, 
    height: 65, 
    justifyContent: 'flex-start', 
    marginTop: 0,
    paddingTop: 20,
    borderRadius: 10,
    zIndex: 1,
    position: 'absolute',
    width: '100%'
  },
  headerBackground: {
    height: 123,
    width: '100%',
    backgroundColor: ORANGE,
    borderRadius: 10
  },
  headerText: {
    marginTop: 4,
    color: TEXT_COLOR_BLACK,
    fontSize: 24,
    textAlign: 'center'
  },
  headerArrowContainer: {
    position: 'absolute',
    top: 35,
    left: 14,
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
    fontSize: 17,
    ...FONT.Noto500
  },
  productCountPrice: {
    color: '#999999',
    marginVertical: 8,
    fontSize: 15,
    ...FONT.Noto500
  },
  productPrice: {
    fontSize: 30,
    ...FONT.Mukta700
  },
  cartCountText: {
    fontSize: 18,
    color: TEXT_COLOR_BLACK,
    marginHorizontal: 10,
    ...FONT.Noto500
  },
  cartAddText: {
    color: ORANGE,
    marginRight: 10,
    ...FONT.Noto700
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
    marginBottom: 16,
    ...FONT.Noto700
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
    ...FONT.Mukta700
  },
  recomendedSliderContainer: {
    marginTop: 14
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
    color: TEXT_COLOR_BLACK,
    ...FONT.Noto500
  },
  recomendedCount: {
    fontSize: 13,
    color: '#878786',
    marginTop: 6,
    marginBottom: 14,
    width: '100%',
    alignItems: 'flex-start',
    ...FONT.Noto500
  },
  recomendedPrice: {
    fontSize: 17,
    ...FONT.Noto700
  },
  anchorsCardContainer: {
    width: '90%',
    backgroundColor: 'white',
    zIndex: 100,
    position: 'relative',
    borderRadius: 10,
    marginTop: 28,
    padding: 22,
    marginBottom: 60
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
    fontSize: 13,
    ...FONT.Open400
  },
  nutritionParamsSlideContainer: {
    position: 'relative', 
    overflow: 'hidden', 
    width: '100%'
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
    color: TEXT_COLOR_BLACK,
    ...FONT.Noto500
  },
  nutritionParamsType: {
    color: '#999999',
    fontSize: 12,
    marginBottom: 4,
    ...FONT.Open400
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
    fontSize: 10,
    ...FONT.Open600
  },
  nutritionParamsRiText: {
    fontSize: 11,
    color: '#707070',
    ...FONT.Open600
  },
  nutritionParamsButton: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    height: 40,
    marginTop: 12
  },
  nutritionParamsButtonText: {
    fontSize: 16,
    color: ORANGE,
    marginRight: 12,
    ...FONT.Noto700
  },
  otherTableStroke: {
    width: '100%', 
    height: 30,
    flexDirection: 'row', 
    marginTop: 16,
  },
  otherTableQuest: {
    color: '#878786',
    fontSize: 12,
    ...FONT.Open400
  },
  otherTableAsw: {
    fontSize: 12,
    color: TEXT_COLOR_BLACK,
    textAlign: 'right',
    ...FONT.Open400
  },
  cartAdressContainer: {
    marginTop: -51, 
    width: '90%',
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 22,
    paddingBottom: 12
  },
  cartItemContainer: {
    width: '100%',
    paddingVertical: 2,
    height: 80,
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  offerSend: {
    fontSize: 7, 
    backgroundColor: '#FFEBBF', 
    padding: 3,
    width: 140,
    marginVertical: 6,
    ...FONT.Noto700
  },
  cartItemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cartItemName: {
    fontSize: 12,
    ...FONT.Noto500
  },
  cartItemPrice: {
    fontSize: 12,
    ...FONT.Noto700
  },
  cartItemCount: {
    fontSize: 12,
    color: '#878786',
    ...FONT.Noto500
  },
  paymentContainer: {
    marginTop: 18, 
    width: '90%', 
    justifyContent: 'flex-start'
  },
  promoInputContainer: {
    backgroundColor: 'white',
    height: 48,
    borderRadius: 10,
    marginTop: 12,
    paddingHorizontal: 18
  },
  promoInput: {
    height: 48,
    color: '#CCCCCC',
    fontSize: 17,
    ...FONT.Noto500
  },
  cartMainPriceContainer: {
    backgroundColor: 'white',
    borderRadius: 10, 
    marginTop: 22, 
    marginBottom: 120,
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  cartPaymentText: {
    fontSize: 18, 
    color: TEXT_COLOR_BLACK,
    marginTop: 4,
    ...FONT.Noto500
  },
  totalSumm: {
    fontSize: 24,
    color: TEXT_COLOR_BLACK,
    marginTop: 12,
    ...FONT.Mukta700
  },
  cartFormInputsContainer: {
    flexDirection: 'row', 
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  cartFormTitleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  compleateIcon: {
    position: 'absolute',
    right: 9,
    top: 10
  },
  cartLine: {
    width: '100%', 
    height: 1, 
    backgroundColor: '#F2F2F2'
  },
  cartItemInfoContainer: {
    width: '50%', 
    height: '100%', 
    justifyContent: "space-evenly"
  },
  cartItemInteractiveContainer: {
    justifyContent: 'flex-end', 
    height: '100%'
  },
  sliderHeartContainer: {
    alignItems: 'flex-end', 
    width: '100%'
  },
  cartDeliveryContainer: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: TEXT_COLOR_BLACK,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  deliveryButtonContainer: {
    backgroundColor: '#FFBC41',
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deliveryButtonText: {
    color: TEXT_COLOR_BLACK,
    ...FONT.Noto700,
    fontSize: 15,
  },
  deliveryLight: {
    color: 'white',
    fontSize: 11,
    ...FONT.Noto500
  },
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  _bold: {
    fontWeight: 'bold'
  },
  _anchorsTitle: {
    marginTop: 24, 
    fontSize: 22,
    color: TEXT_COLOR_BLACK,
    ...FONT.Noto700
  },
  _anchorsText: {
    marginTop: 14,
    ...FONT.Open300
  },
  _cartTitle: {
    fontSize: 15,
    color: TEXT_COLOR_BLACK,
    ...FONT.Noto700
  },
  _inputContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom: 12,
    height: 54,
    position: 'relative',
    justifyContent: 'flex-end'
  },
  _input: {
    paddingHorizontal: 12,
    color: TEXT_COLOR_BLACK,
    width: '85%',
    height: '80%',
    ...FONT.Noto500
  },
  _lineThrough: {
    textDecorationLine: 'line-through'
  },
  _spaceBetween: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  _row: {
    flexDirection: 'row'
  },
  _inputPointer: {
    position: 'absolute',
    right: 14,
    top: 18
  },
});