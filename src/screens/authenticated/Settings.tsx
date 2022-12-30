import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type SettingsScreenProps = StackScreenProps<
  RootNavigatorStackParamList,
  'Settings'
>;

const Settings: FC<SettingsScreenProps> = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
