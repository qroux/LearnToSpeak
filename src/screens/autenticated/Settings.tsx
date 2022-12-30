import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import {routeNames} from '../../routes/routeNames';
import {RootStackParamList} from '../../routes/rootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

const Settings: FC<SettingsScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="back to dashboard"
        onPress={() => navigation.navigate(routeNames.dashboard)}
      />
    </View>
  );
};

export default Settings;
