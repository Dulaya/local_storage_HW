import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAuthToken = async authToken => {
  try {
    await AsyncStorage.setItem('authToken', authToken);
  } catch (error) {
    console.error(error);
  }
};

export const getAuthToken = async setAuthToken => {
  try {
    const tempAuthToken = await AsyncStorage.getItem('authToken');
    tempAuthToken && setAuthToken(tempAuthToken);
  } catch (error) {
    console.error(error);
  }
};

export const removeAuthToken = async setAuthToken => {
  try {
    await AsyncStorage.removeItem('authToken');
    setAuthToken();
  } catch (error) {
    console.error(error);
  }
};
