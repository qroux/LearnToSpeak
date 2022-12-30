import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import routeNames from '@utils/routeNames';

type HomeScreenProps = StackScreenProps<RootNavigatorStackParamList, 'Home'>;

const Home: FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="go back"
        onPress={() =>
          navigation.navigate(routeNames.authenticatedNavigator, {
            screen: routeNames.dashboard,
          })
        }
      />
    </View>
  );
};

export default Home;
