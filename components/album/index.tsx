import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { AlbumType } from '../../types';

export type AlbumProps = {
  album: AlbumType,
}

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.album.imgUri }} style={styles.image}/>
      <Text style={styles.text}>{props.album.artists}</Text>
    </View>
  )
}

export default Album;
