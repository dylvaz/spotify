export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
}; 

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType = {
  id: string;
  name: string;
  by: string;
  imgUri: string;
  artists: string;
  likes: string;
};

export type Song = {
  id: string, 
  uri: string,
  imgUri: string;
  title: string;
  artist: string;
}
