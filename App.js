import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './src/context/GlobalContext';
import {LoginScreen} from './src/screens';
import {DashboardScreen} from './src/screens';

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
  };


  const loginLocation = 'Login';
  const dashBoardLocation = 'Dashboard';
  const randomAuthKey = Math.random().toString();

  return (
    <GlobalContext.Provider
      value={{
        dashBoardLocation,
        loginLocation,
        randomAuthKey,
        setAuthToken,
        storeData,
        getData,
        removeValue,
      }}>
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
    </GlobalContext.Provider>
  );
};

export default App;
