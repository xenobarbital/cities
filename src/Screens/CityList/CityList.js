import React, {useState, useReducer, useCallback} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Keyboard,
  Alert,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import SearchBar from '../../Components/SearchBar';
import CityBar from '../../Components/CityBar';
import styles from './styles';

const MOCK_DATA = [
  {
    city: 'Moscow',
    temp: 0,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
  },
  {
    city: 'Buenos Aires desanto',
    temp: 45,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
  },
  {
    city: 'Moscow',
    temp: 0,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
  },
  {
    city: 'Moscow',
    temp: 0,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
  },
  {
    city: 'Moscow',
    temp: 0,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
  },
  {
    city: 'Moscow',
    temp: 0,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
  },
  {
    city: 'Moscow',
    temp: 0,
    time: '4:25',
    id: 'id' + Math.random().toString(16).slice(2),
    handlePress: () => console.log('kek'),
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
      Alert.alert('Warning', 'Wish to delete the entry?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch({
              type: 'delete',
              id,
            });
          },
        },
      ]);
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
        data={MOCK_DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CityBar {...item} handlePress={deleteData(item.id)} />
        )}
      />
    </View>
  );
};

export default CityList;
