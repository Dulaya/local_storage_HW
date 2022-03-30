import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './src/context/GlobalContext';
import {
  storeAuthToken,
  getAuthToken,
  removeAuthToken,
} from './src/localstorage/localStorage.service';
import {LoginScreen} from './src/screens';
import {DashboardScreen} from './src/screens';

const Stack = createNativeStackNavigator();

export const App = () => {
  const [authToken, setAuthToken] = useState();

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
        storeAuthToken,
        getAuthToken,
        removeAuthToken,
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
