import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { AlbumType } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
  album: AlbumType,
};

const Album = (props: AlbumProps) => {

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Album Screen', { id: props.album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imgUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artists}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
