import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import { capitalizeFirstLetter } from "../../helpers/string";

const Header = (contact) => {
    const { first, last } = contact.name;
    return (
        <View style={styles.headerContainer}>
            <Image source={{ uri: contact.picture.large }} style={styles.headerImage} />
            <Text style={styles.headerText}>{capitalizeFirstLetter(first)} {capitalizeFirstLetter(last)}</Text>
        </View>
    );
};

export default Header;