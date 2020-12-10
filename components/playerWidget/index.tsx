import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';
import { Sound } from 'expo-av/build/Audio/Sound';
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const song = {
  id: '1',
  uri: '/data/user/0/host.exp.exponent/cache/ExperienceData/%40anonymous%2Fspotify-d347e0d6-a737-45fc-83a9-bf0ae621a6ef/ExponentAsset-f91ff38679c75b0be73192b5b9660d2b.mp3',
  imgUri: 'https://i.pinimg.com/originals/4c/8e/62/4c8e62024346ece520c2dec0bc9e1083.png',
  title: `Thuggin'`,
  artist: 'Freddie Gibbs',
};

const PlayerWidget = () => {

  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    try {
      const { sound: newSound } = await Sound.createAsync(
        require('../../assets/audio/Thuggin.mp3'),
        { shouldPlay: isPlaying },
        onPlaybackStatusUpdate
      );
      setSound(newSound);
    } catch (err) {
      console.error(err);
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    } else {
      return (position / duration) * 100;
    };
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    try {
      if (!sound) {
        return;
      }
      if (isPlaying) {
        await sound.stopAsync();
      } else {
        await sound.playAsync();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imgUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.interpunct}> · </Text>
            <Text style={styles.artists}>{song.artist}</Text>
          </View>
          <View style={styles.icons}>
            <AntDesign name="hearto" size={27} color={'white'} />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={27} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
