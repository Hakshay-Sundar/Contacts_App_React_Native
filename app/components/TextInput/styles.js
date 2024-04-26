import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    txtInpContainer: {
        width: window.width - 20,
        marginHorizontal: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    txtInput: {
        width: window.width - 20,
        height: 50,
        fontSize: 16,
    }
});

export default styles;