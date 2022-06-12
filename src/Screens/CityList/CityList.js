import React from 'react';
import {View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';

import SearchBar from '../../Components/SearchBar';
import CityBar from '../../Components/CityBar';

import styles from './styles';

const MOCK_DATA = [
  {
    id: '1',
    city: 'Yerevan',
    temp: '+25',
    time: '20:21',
  },
  {
    id: '2',
    city: 'Sevan',
    temp: '+20',
    time: '20:21',
  },
  {
    id: '3',
    city: 'Katmandu',
    temp: '+18',
    time: '23:21',
  },
];

const CityList = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View>
          <SearchBar />
        </View>
        <FlatList
          data={MOCK_DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CityBar {...item} />}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CityList;
