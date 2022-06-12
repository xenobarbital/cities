import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CityBar = ({city, temp, time}) => {
  const temperature = useMemo(() => {
    return temp > 0 ? `+${temp}` : temp.toString();
  }, [temp]);

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={[styles.text, styles.textCity]}>{city}</Text>
        <Text style={[styles.text, styles.textTime]}>{time}</Text>
      </View>
      <View style={styles.rightBlock}>
        <Text style={[styles.text, styles.textTemperature]}>{temperature}</Text>
        <Text style={[styles.text, styles.superscript]}>o</Text>
      </View>
    </View>
  );
};

export default CityBar;
