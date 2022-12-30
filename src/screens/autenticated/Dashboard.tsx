import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import {routeNames} from '../../routes/routeNames';
import {RootStackParamList} from '../../routes/rootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

const Dashboard: FC<DashboardScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="go to settings"
        onPress={() => navigation.navigate(routeNames.settings)}
      />
    </View>
  );
};

export default Dashboard;
