import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dashboard Screen</Text>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export const App = () => {
  const [authToken, setAuthToken] = useState();

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        console.log(value);
        setAuthToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      setAuthToken();
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };

  storeData('My Auth Token');
  removeValue();
  getData();

  return (
    <NavigationContainer>
      {authToken ? (
        <Stack.Navigator initialRouteName="DashboardScreen">
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
