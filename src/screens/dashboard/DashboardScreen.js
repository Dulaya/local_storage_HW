import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {GlobalContext} from '../../context/GlobalContext';
import {style} from './DashboardScreen.style';

export const DashboardScreen = ({navigation}) => {
  const {dashBoardLocation, randomAuthKey, removeAuthToken, setAuthToken} =
    useContext(GlobalContext);

  return (
    <View style={style.dashboardScreenContainer}>
      <Text style={style.dashboardText}>Dashboard Screen</Text>
      <Button
        title={'Log Out'}
        onPress={() => {
          removeAuthToken(setAuthToken);
          navigation.navigate(dashBoardLocation);
        }}
      />
      <Text>Random Auth Key: {randomAuthKey}</Text>
    </View>
  );
};
