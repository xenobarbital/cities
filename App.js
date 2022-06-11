import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import CityList from './src/Screens/CityList';
import colors from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <CityList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.black,
  },
});

export default App;
