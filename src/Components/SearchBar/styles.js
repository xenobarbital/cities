import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    color: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
    marginBottom: 75,
  },
  textInput: {
    color: colors.white,
    fontSize: 24,
    width: '85%',
  },
});

export default styles;
