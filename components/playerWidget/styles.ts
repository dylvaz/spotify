import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  interpunct: {
    color: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 37,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
  artists: {
    color: 'lightgrey',
    fontSize: 16,
    margin: 5
  },
  progress: {
    height: 1,
    backgroundColor: '#bcbcbc'
  },
});

export default styles;
