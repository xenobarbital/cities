import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import colors from '../../constants/colors';

const SearchBar = ({value, onChangeText, onSubmitEditing, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="search"
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity onPress={onPress}>
        <Icon name="search" color={colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
