import React from 'react';
import { Text, Image, View } from 'react-native';
import { Song } from '../../types';
import styles from './styles';

export type SongListItemProps = {
  song: Song;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imgUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artists}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
