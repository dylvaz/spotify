import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const song = {
  id: '1',
  imgUri: 'https://i.pinimg.com/originals/4c/8e/62/4c8e62024346ece520c2dec0bc9e1083.png',
  title: 'Thuggin',
  artist: 'Freddie Gibbs',
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imgUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.interpunct}> · </Text>
          <Text style={styles.artists}>{song.artist}</Text>
        </View>
        <View style={styles.icons}>
          <AntDesign name="hearto" size={27} color={'white'} />
          <FontAwesome name="play" size={27} color={'white'} />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
