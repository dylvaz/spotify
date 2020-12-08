import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import albumRowList from '../data/albumRowLists';
import AlbumRow from '../components/albumRow';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumRowList}
        renderItem={({ item }) => <AlbumRow title={item.title} albums={item.albums} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
