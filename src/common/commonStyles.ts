import { StyleSheet } from 'react-native';
import { ORANGE, TEXT_COLOR_BLACK } from './colors';

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    width: '100%', 
    height: 123, 
    backgroundColor: ORANGE,
    paddingTop: 33,
    borderBottomRightRadius: 8, 
    borderBottomLeftRadius: 8,
  },
  headerText: {
    color: TEXT_COLOR_BLACK,
    fontSize: 24,
    textAlign: 'center'
  },
  headerArrowContainer: {
    position: 'absolute',
    top: 37,
    left: 12,
    width: 24, 
    height: 24, 
    justifyContent: 'center',
    zIndex: 1
  },
});