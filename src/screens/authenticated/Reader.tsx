import React, {FC, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {RootNavigatorStackParamList} from '@navigators/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import * as Speech from 'expo-speech';

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

  // const onReadPress = () => {
  //   if (text) {
  //     Speech();
  //     Speech.speak('lorem ipsum doloris');
  //   }
  // };

  const speak = () => {
    const thingToSay = '1 2 3 4 5';
    Speech.speak(thingToSay);
  };

  return (
    <View>
      <Text>Reader</Text>
      <Button title="open lib" onPress={onSelectImagePress} />
      <Button title="extract text" onPress={processImage} />
      <Button title="read" onPress={speak} />
      <Text>{text}</Text>
    </View>
  );
};

export default Reader;
