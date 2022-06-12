import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CityBar = ({city, temp, time}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.text}>{city}</Text>
        <Text style={styles.text}>{time}</Text>
      </View>
      <View style={styles.rightBlock}>
        <Text style={[styles.text, styles.textBig]}>{temp}</Text>
        <Text style={[styles.text, styles.superscript]}>o</Text>
      </View>
    </View>
  );
};

export default CityBar;
