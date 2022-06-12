import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../constants/colors';

const {width} = Dimensions.get('screen');
const breakPoint = width > 360;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
  textCity: {
    fontSize: breakPoint ? 20 : 16,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 11,
  },
  textTime: {
    fontSize: breakPoint ? 20 : 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  textTemperature: {
    fontSize: breakPoint ? 64 : 40,
    fontFamily: 'Montserrat-SemiBold',
  },
  superscript: {
    fontSize: breakPoint ? 20 : 15,
    lineHeight: 22,
    fontFamily: 'Montserrat-SemiBold',
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftBlock: {
    maxWidth: '60%',
  },
});

export default styles;
