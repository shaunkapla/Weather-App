import { StyleSheet } from 'react-native';

const gridStyle = StyleSheet.create({
    border: {
        flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sphereInfo: {
        color: 'white',
        textAlign: 'center',
        marginTop: 0
    }
});

export default gridStyle;