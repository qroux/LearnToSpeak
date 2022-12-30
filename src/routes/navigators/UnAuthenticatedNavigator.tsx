import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import {routeNames} from '../routeNames';
import React from 'react';
import {RootStackParamList} from '../rootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const UnAuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routeNames.home} component={Home} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigator;
