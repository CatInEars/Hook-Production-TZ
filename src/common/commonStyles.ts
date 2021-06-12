import { StyleSheet } from 'react-native';
import { ORANGE, TEXT_COLOR_BLACK, TEXT_COLOR_GRAY } from './colors';

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: 32, 
    height: 32, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  sliderImage: {
    width: 300 - 30, 
    height: 300, 
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
    fontSize: 18
  },
  productCountPrice: {
    color: '#999999',
    marginVertical: 8,
    fontSize: 15
  },
  productPrice: {
    fontSize: 28,
  },
  cartCountText: {
    fontSize: 18,
    color: TEXT_COLOR_BLACK,
    marginHorizontal: 10
  },
  cartAddText: {
    color: ORANGE,
    fontSize: 17,
    marginRight: 10
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16
  },
  buyContainer: {
    marginTop: 28,
    width: '90%',
    justifyContent: 'flex-start'
  },
  buyText: {
    color: TEXT_COLOR_BLACK,
    fontSize: 17
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
    fontSize: 16,
    color: TEXT_COLOR_BLACK
  },
  recomendedCount: {
    color: '#878786',
    marginTop: 6,
    marginBottom: 14,
    width: '100%',
    alignItems: 'flex-start'
  },
  recomendedPrice: {
    fontSize: 17
  }
});