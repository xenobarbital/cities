import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const SearchBar = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="search"
        placeholderTextColor="#878787"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <Icon name="search" color="#fff" size={30} />
    </View>
  );
};

export default SearchBar;
