import React, {useState, useReducer} from 'react';
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import SearchBar from '../../Components/SearchBar';
import CityBar from '../../Components/CityBar';
import styles from './styles';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.data];
    case 'delete':
      return state.filter(({id}) => id !== action.id);
    default:
      throw new Error();
  }
};

const CityList = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [state, dispatch] = useReducer(reducer, []);

  const getData = query => {
    const params = {
      access_key: Config.API_KEY,
      query,
    };

    setLoading(true);

    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        console.log('Full response', apiResponse);
        const {location, current} = apiResponse;
        const cityData = {
          id: 'id' + Math.random().toString(16).slice(2),
          city: location.name,
          time: location.localtime.split(' ')[1],
          temp: current.temperature,
        };

        dispatch({
          type: 'add',
          data: cityData,
        });

        console.log('City data', cityData);
      })
      .catch(error => {
        console.log('Error', error);
      })
      .finally(() => {
        setLoading(false);
        setSearchQuery('');
      });
  };

  const submitQuery = ({nativeEvent}) => {
    console.log('API key', Config.API_KEY);
    console.log('Bambucha', nativeEvent.text);
    getData(nativeEvent.text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        {loading && (
          <View style={styles.loadOverlay}>
            <ActivityIndicator />
          </View>
        )}
        <View>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={submitQuery}
          />
        </View>
        <FlatList
          data={state}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CityBar {...item} />}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CityList;
