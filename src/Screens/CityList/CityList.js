import React from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';

import SearchBar from '../../Components/SearchBar';

import styles from './styles';

const CityList = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <SearchBar />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CityList;
