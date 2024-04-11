import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25
  },

  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'turquoise',
  },
  gridContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default welcomeStyles;