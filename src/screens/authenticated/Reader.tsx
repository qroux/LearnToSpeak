import React, {FC, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';

import {recognizeImage} from '../../lib/MLKit';

type ReaderScreenProps = StackScreenProps<
  RootNavigatorStackParamList,
  'Reader'
>;

const Reader: FC<ReaderScreenProps> = () => {
  const [selectedUri, setSelectedUri] = useState<string | undefined>();
  const [text, setText] = useState<string | undefined>();

  const onSelectImagePress = () => {
    launchImageLibrary({selectionLimit: 1, mediaType: 'photo'}, res => {
      const uri = res?.assets?.[0].uri;

      if (uri) {
        setSelectedUri(uri);
      }
    });
  };

  const processImage = () => {
    if (selectedUri) {
      recognizeImage(selectedUri)
        .then(response => setText(response?.blocks?.[0].text))
        .catch(err => console.log({err}));
    }
  };

  return (
    <View>
      <Text>Reader</Text>
      <Button title="open lib" onPress={onSelectImagePress} />
      <Button title="extract text" onPress={processImage} />
      <Text>{text}</Text>
    </View>
  );
};

export default Reader;
