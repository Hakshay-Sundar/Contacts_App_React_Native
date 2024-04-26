import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
    },
    headerImage: {
        width: window.width / 2,
        height: window.width / 2,
        borderRadius: window.width / 4,

    },
    headerText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default styles;