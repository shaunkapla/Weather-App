import { StyleSheet } from 'react-native';

const weatherSphereStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    borderRadius: 999, // Use a large value for a perfect circle
    justifyContent: 'center'
  },
  sphereInfo: {
    color: 'white',
    textAlign: 'center'
  },
  weatherInfo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default weatherSphereStyle;