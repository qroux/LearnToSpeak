import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type ReaderScreenProps = StackScreenProps<
  RootNavigatorStackParamList,
  'Reader'
>;

const Reader: FC<ReaderScreenProps> = () => {
  return (
    <View>
      <Text>Reader</Text>
    </View>
  );
};

export default Reader;
