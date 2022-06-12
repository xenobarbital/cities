import React, {useState, useReducer, useCallback} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Keyboard,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import SearchBar from '../../Components/SearchBar';
import CityBar from '../../Components/CityBar';
import styles from './styles';

const MOCK_DATA = [
  {
    id: '1',
    city: 'Moscow1',
    temp: 15,
    time: '15:45',
  },
  {
    id: '2',
    city: 'Moscow2',
    temp: 15,
    time: '15:45',
  },
  {
    id: '3',
    city: 'Moscow3',
    temp: 15,
    time: '15:45',
  },
  {
    id: '4',
    city: 'Moscow4',
    temp: 15,
    time: '15:45',
  },
  {
    id: '5',
    city: 'Moscow5',
    temp: 15,
    time: '15:45',
  },
  {
    id: '6',
    city: 'Moscow6',
    temp: 15,
    time: '15:45',
  },
  {
    id: '7',
    city: 'Moscow7',
    temp: 15,
    time: '15:45',
  },
  {
    id: '8',
    city: 'Moscow8',
    temp: 15,
    time: '15:45',
  },
];

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

  const showToast = () => {
    ToastAndroid.showWithGravity(
      'An error ocurred',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const getData = query => {
    if (query) {
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
        })
        .catch(error => {
          showToast();
        })
        .finally(() => {
          setLoading(false);
          setSearchQuery('');
        });
    }
  };

  const deleteData = useCallback(
    id => () => {
      dispatch({
        type: 'delete',
        id,
      });
    },
    [],
  );

  const submitQuery = ({nativeEvent}) => {
    getData(nativeEvent.text);
  };

  const handlePress = query => () => {
    getData(query);
    Keyboard.dismiss();
  };

  return (
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
          onPress={handlePress(searchQuery)}
        />
      </View>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CityBar {...item} handlePress={deleteData(item.id)} />
        )}
      />
    </View>
  );
};

export default CityList;
