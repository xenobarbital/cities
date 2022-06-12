import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

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
  textBig: {
    fontSize: 64,
    fontWeight: '400',
  },
  superscript: {
    fontSize: 13,
    lineHeight: 15,
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default styles;
