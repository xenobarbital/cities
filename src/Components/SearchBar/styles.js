import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../constants/colors';

const {width} = Dimensions.get('screen');
const breakPoint = width > 360;

const styles = StyleSheet.create({
  wrapper: {
    color: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
    marginBottom: breakPoint ? 75 : 50,
  },
  textInput: {
    color: colors.white,
    fontSize: breakPoint ? 24 : 20,
    width: '85%',
  },
});

export default styles;
