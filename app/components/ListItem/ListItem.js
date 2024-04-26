import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { capitalizeFirstLetter } from '../../helpers/string';
import styles, { iconSize, underlayColor } from './styles';

const ListItem = ({ contact, onClick }) => {
    const name = capitalizeFirstLetter(contact.name.first) + ' ' + capitalizeFirstLetter(contact.name.last);
    const iconRight = 'arrow-forward-outline';

    return (
        <TouchableHighlight onPress={onClick} underlayColor={underlayColor}>
        <View style={styles.listItem}>
            <Image source={{uri: contact.picture.thumbnail}} style={styles.listItemAvatar} />
            <View>
                <Text style={styles.listItemHeading}>{name}</Text>
                <Text style={styles.listItemData}>{contact.email}</Text>
            </View>
            <View style={styles.listItemRightIcon}>
                <Icon name={iconRight} size={iconSize} style={{alignSelf:'flex-end'}}/>
            </View>
        </View>
        </TouchableHighlight>
    );
};

export default ListItem;
