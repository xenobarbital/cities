import React from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SearchBar from '../../Components/SearchBar';

import styles from './styles';

const CityList = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <SearchBar />
        <Text style={styles.text}>List</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CityList;
