import { StyleSheet } from 'react-native';

export const underlayColor = '#3f3f3f';
export const iconSize = 25;
const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemHeading: {
        flex: 6,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginStart: 10,
        alignContent: 'start'
    },
    listItemData: {
        flex: 6,
        fontSize: 16,
        color: 'black',
        marginStart: 10,
        marginTop: 5,
        alignContent: 'start'
    },
    listItemRightIcon: {
        flex: 1,
        width: 30,
        height: 30,
    },
    listItemAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
}
);

export default styles;