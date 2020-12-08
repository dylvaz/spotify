import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AlbumType } from '../../types';
import styles from './styles';

export type AlbumHeaderProps = {
  albumInfo: AlbumType;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { albumInfo } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: albumInfo.imgUri }} style={styles.image} />
      <Text style={styles.name}>{albumInfo.name}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>By {albumInfo.by}</Text>
        <Text style={styles.interpunct}> · </Text>
        <Text style={styles.likes}>{albumInfo.likes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
