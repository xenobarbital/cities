import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../constants/colors';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 22,
    paddingVertical: 40,
  },
  loadOverlay: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: colors.blackTransparent,
  },
});

export default styles;
