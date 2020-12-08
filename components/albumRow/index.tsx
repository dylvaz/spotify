import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { AlbumType } from '../../types';
import Album from '../album';
import styles from './styles';

export type AlbumRowProps = {
  title: string;
  albums: AlbumType[];
};

const AlbumRow = (props: AlbumRowProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={( item ) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumRow;
