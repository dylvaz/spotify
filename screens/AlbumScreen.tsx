import React, { useEffect } from 'react';
import SongListItem from '../components/songListItem';
import { useRoute } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import AlbumHeader from '../components/albumScreenHeader'
import albumDetails from '../data/albumDetails';

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {

  }, []);

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader albumInfo={albumDetails} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumScreen;
