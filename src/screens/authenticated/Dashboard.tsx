import React from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type DashboardScreenProps = StackScreenProps<
  RootNavigatorStackParamList,
  'Dashboard'
>;

const Dashboard: FC<DashboardScreenProps> = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
