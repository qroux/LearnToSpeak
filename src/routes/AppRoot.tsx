import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AuthenticatedNavigator from './navigators/AuthenticatedNavigator';
import UnAuthenticatedNavigator from './navigators/UnAuthenticatedNavigator';

const AppRoot = () => {
  const isAuthenticated = !false;

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthenticatedNavigator />
      ) : (
        <UnAuthenticatedNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppRoot;
