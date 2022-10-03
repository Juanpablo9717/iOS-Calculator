const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calcContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
    paddingHorizontal: 20,
    marginBottom: 18,
  },
});
