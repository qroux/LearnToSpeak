import React from 'react';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '@screens/authenticated/Dashboard';
import routeNames from '@utils/routeNames';

const Stack = createStackNavigator<RootNavigatorStackParamList>();

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routeNames.dashboard} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
