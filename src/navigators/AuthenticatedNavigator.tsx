import React from 'react';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '@screens/authenticated/Dashboard';
import Reader from '@screens/authenticated/Reader';
import Settings from '@screens/authenticated/Settings';
import routeNames from '@utils/routeNames';

const Tabs = createBottomTabNavigator<RootNavigatorStackParamList>();

const AuthenticatedNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{}}>
      <Tabs.Screen name={routeNames.dashboard} component={Dashboard} />
      <Tabs.Screen name={routeNames.reader} component={Reader} />
      <Tabs.Screen name={routeNames.settings} component={Settings} />
    </Tabs.Navigator>
  );
};

export default AuthenticatedNavigator;
