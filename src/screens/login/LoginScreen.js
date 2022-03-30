import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {GlobalContext} from '../../context/GlobalContext';
import {style} from './LoginScreen.style';

export const LoginScreen = ({navigation}) => {
  const {
    loginLocation,
    randomAuthKey,
    storeAuthToken,
    getAuthToken,
    removeValue,
  } = useContext(GlobalContext);

  return (
    <View style={style.loginScreenContainer}>
      <Text style={style.loginText}>Login Screen</Text>
      <Button
        title={'Log In'}
        onPress={() => {
          storeAuthToken(randomAuthKey);
          getAuthToken();
          navigation.navigate(loginLocation);
        }}
      />
    </View>
  );
};
