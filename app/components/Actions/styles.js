import { StyleSheet } from 'react-native';

export const iconSize = 25;
const styles = StyleSheet.create({
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    actionIconContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    actionIcon: {
        marginStart: 5,
        color: 'blue',
    },
    actionLabel: {
        fontSize: 10,
        color: 'gray',
    },
    actionText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
    },
});

export default styles;