import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/autenticated/Dashboard';
import React from 'react';
import {routeNames} from '../routeNames';
import {RootStackParamList} from '../rootStackParamList';
import Settings from '../../screens/autenticated/Settings';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routeNames.dashboard} component={Dashboard} />
      <Stack.Screen name={routeNames.settings} component={Settings} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
