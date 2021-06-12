import { StyleSheet } from 'react-native';
import { ORANGE, TEXT_COLOR_BLACK } from './colors';

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
    borderBottomRightRadius: 8, 
    borderBottomLeftRadius: 8,
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
    height: 500,
    width: '90%',
    borderRadius: 8, 
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
  }
});