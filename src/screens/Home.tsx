import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/rootStackParamList';

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

const Home: FC<DashboardScreenProps> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
