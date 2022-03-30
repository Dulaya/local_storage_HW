import React, {useState} from 'react';
import {GlobalContext} from './src/context/GlobalContext';
import {
  storeAuthToken,
  getAuthToken,
  removeAuthToken,
} from './src/localstorage/localStorage.service';
import {Navigation} from './src/navigations/Navigation';

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
        authToken,
        setAuthToken,
        storeAuthToken,
        getAuthToken,
        removeAuthToken,
      }}>
      <Navigation  />
    </GlobalContext.Provider>
  );
};

export default App;
