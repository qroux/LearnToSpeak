import React from 'react';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@screens/unAuthenticated/Home';
import routeNames from '@utils/routeNames';

const Stack = createStackNavigator<RootNavigatorStackParamList>();

export const UnAuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routeNames.home}
        component={Home}
        options={{headerTitle: 'home screen'}}
      />
    </Stack.Navigator>
  );
};
