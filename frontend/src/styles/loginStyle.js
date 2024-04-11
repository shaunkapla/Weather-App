import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'turquoise',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

export default loginStyles;