import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalContext} from '../context/GlobalContext';
import {LoginScreen} from '../screens';
import {DashboardScreen} from '../screens';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const {authToken} = useContext(GlobalContext);

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
