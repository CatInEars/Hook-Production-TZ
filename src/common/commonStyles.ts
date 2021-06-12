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
  },
  structureContainer: {
    height: 36, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 12, 
    alignItems: 'center', 
    position: 'relative'
  },
  heartIconContainer: {
    position: 'absolute', 
    right: 16
  }
});