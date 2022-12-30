import React from 'react';

import AuthenticatedNavigator from '@navigators/AuthenticatedNavigator';
import {UnAuthenticatedNavigator} from '@navigators/UnAuthenticatedNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import routeNames, {
  AuthenticatedRouteValues,
  UnAuthenticatedRouteValues,
} from '@utils/routeNames';

export type RootNavigatorStackParamList = {
  // UNAUTHENTICATED
  [routeNames.unAuthenticatedNavigator]: {screen: UnAuthenticatedRouteValues};
  [routeNames.home]: undefined;

  // AUTHENTICATED
  [routeNames.authenticatedNavigator]: {screen: AuthenticatedRouteValues};
  [routeNames.dashboard]: undefined;
  [routeNames.reader]: undefined;
  [routeNames.settings]: undefined;
};

const Stack = createStackNavigator<RootNavigatorStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen
        name={routeNames.unAuthenticatedNavigator}
        component={UnAuthenticatedNavigator}
      /> */}
      <Stack.Screen
        name={routeNames.authenticatedNavigator}
        component={AuthenticatedNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
